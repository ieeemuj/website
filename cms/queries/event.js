import { gql } from '@apollo/client';
import { DateTime } from 'luxon';

import PrismicClient from '../PrismicClient';

class EventData {
  constructor(prismicTitle, club, coverImage, startTime, endTime, location, fee, prize, teamSize,
    linkToRegistrationForm, prismicDescription, uid, tags) {
    this.prismicTitle = prismicTitle;
    this.club = club;
    this.coverImage = coverImage;
    this.startISO = startTime;
    this.endISO = endTime;
    this.dateTimeObj = EventData.getDateTimeStr(startTime, endTime);
    this.location = location || 'TBD';
    this.fee = fee || 'TBD';
    this.prize = prize || 'No Prize';
    this.teamSize = teamSize || '1';
    this.linkToRegistrationForm = linkToRegistrationForm;
    this.prismicDescription = prismicDescription;
    this.slug = uid;
    this.tags = tags;
  }

  object() {
    return {
      prismicTitle: this.prismicTitle,
      club: this.club,
      coverImage: this.coverImage,
      startISO: this.startISO,
      endISO: this.endISO,
      dateTimeObj: this.dateTimeObj,
      location: this.location,
      fee: this.fee,
      prize: this.prize,
      teamSize: this.teamSize,
      linkToRegistrationForm: this.linkToRegistrationForm,
      prismicDescription: this.prismicDescription,
      slug: this.slug,
      tags: this.tags,
    };
  }

  /**
   * Returns an object with:
   * - dateStr: string to use for dates
   * - timeStr: string to use for times
   * - status: 0 for completed, 1 for upcoming, 2 for ongoing
   */
  static getDateTimeStr(startISO, endISO) {
    const startDateTime = DateTime.fromISO(startISO).setZone('Asia/Kolkata');
    const endDateTime = DateTime.fromISO(endISO).setZone('Asia/Kolkata');

    const startDateStr = startDateTime.toFormat('MMM d, y');
    const endDateStr = endDateTime.toFormat('MMM d, y');

    let dateStr;

    if (startDateStr === endDateStr) dateStr = startDateStr;
    else dateStr = `${startDateStr} - ${endDateStr}`;

    const startTimeStr = startDateTime.toFormat('t');
    const endTimeStr = endDateTime.toFormat('t');
    const timeStr = `${startTimeStr} - ${endTimeStr}`;

    return { dateStr, timeStr };
  }

  static formatISOWithoutMillis(dateTimeObj) {
    dateTimeObj.toFormat('y-MM-dd\'T\'TTZZ');
  }
}

export const getEventByUID = async (uid) => {
  const response = await PrismicClient.query({
    query: gql`
    query GetEventByUID {
      event(uid: "${uid}", lang: "en-us") {
        title,
        club,
        cover_image,
        start_time,
        end_time,
        location,
        fee,
        prize,
        team_size,
        link_to_registration_form {
          ... on _ExternalLink {
            url
          }
        },
        description,
        _meta {
          uid,
          tags
        }
      }
    }`,
  });

  if (response.data.event) {
    const event = new EventData(
      response.data.event.title,
      response.data.event.club,
      response.data.event.cover_image,
      response.data.event.start_time,
      response.data.event.end_time,
      response.data.event.location,
      response.data.event.fee,
      response.data.event.prize,
      response.data.event.team_size,
      response.data.event.link_to_registration_form,
      response.data.event.description,
      response.data.event._meta.uid,
      response.data.event._meta.tags,
    );

    return event;
  }

  return null;
};

export const getAllSlugs = async () => {
  const response = await PrismicClient.query({
    query: gql`
    query GetAllSlugs {
      allEvents {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }`,
  });

  const arr = [];

  if (response.data.allEvents) {
    const nodes = response.data.allEvents.edges;
    nodes.forEach((event) => arr.push(event.node._meta.uid));
  }

  return arr;
};

export const getAllEvents = async () => {
  const response = await PrismicClient.query({
    query: gql`
    query GetActiveEvents {
      allEvents {
        edges {
          node {
            title,
            club,
            cover_image,
            start_time,
            end_time,
            location,
            fee,
            prize,
            team_size,
            link_to_registration_form {
              ... on _ExternalLink {
                url
              }
            },
            description,
            _meta {
              uid,
              tags
            }
          }
        }
      }
    }`,
  });

  const arr = [];

  if (response.data.allEvents) {
    const nodes = response.data.allEvents.edges;
    nodes.forEach((event) => {
      const { node } = event;
      const newEvent = new EventData(
        node.title,
        node.club,
        node.cover_image,
        node.start_time,
        node.end_time,
        node.location,
        node.fee,
        node.prize,
        node.team_size,
        node.link_to_registration_form,
        node.description,
        node._meta.uid,
        node._meta.tags,
      );
      arr.push(newEvent.object());
    });
  }

  return arr;
};

export const getAllPastEvents = async (isoDateString) => {
  const prismicISOStr = EventData.formatISOWithoutMillis(isoDateString);
  const response = await PrismicClient.query({
    query: gql`
    query GetActiveEvents {
      allEvents(where: { end_time_before: $currentDateTime }) {
        edges {
          node {
            title,
            club,
            cover_image,
            start_time,
            end_time,
            location,
            fee,
            prize,
            team_size,
            link_to_registration_form {
              ... on _ExternalLink {
                url
              }
            },
            description,
            _meta {
              uid,
              tags
            }
          }
        }
      }
    }`,
    variables: {
      currentDateTime: prismicISOStr,
    },
  });

  const arr = [];

  if (response.data.allEvents) {
    const nodes = response.data.allEvents.edges;
    nodes.forEach((event) => {
      const { node } = event;
      const newEvent = new EventData(
        node.title,
        node.club,
        node.cover_image,
        node.start_time,
        node.end_time,
        node.location,
        node.fee,
        node.prize,
        node.team_size,
        node.link_to_registration_form,
        node.description,
        node._meta.uid,
        node._meta.tags,
      );
      arr.push(newEvent.object());
    });
  }

  return arr;
};

export const getAllActiveEvents = async (isoDateString) => {
  const prismicISOStr = EventData.formatISOWithoutMillis(isoDateString);
  const response = await PrismicClient.query({
    query: gql`
    query GetActiveEvents {
      allEvents(where: { end_time_after: $currentDateTime }) {
        edges {
          node {
            title,
            club,
            cover_image,
            start_time,
            end_time,
            location,
            fee,
            prize,
            team_size,
            link_to_registration_form {
              ... on _ExternalLink {
                url
              }
            },
            description,
            _meta {
              uid,
              tags
            }
          }
        }
      }
    }`,
    variables: {
      currentDateTime: prismicISOStr,
    },
  });

  const arr = [];

  if (response.data.allEvents) {
    const nodes = response.data.allEvents.edges;
    nodes.forEach((event) => {
      const { node } = event;
      const newEvent = new EventData(
        node.title,
        node.club,
        node.cover_image,
        node.start_time,
        node.end_time,
        node.location,
        node.fee,
        node.prize,
        node.team_size,
        node.link_to_registration_form,
        node.description,
        node._meta.uid,
        node._meta.tags,
      );
      arr.push(newEvent.object());
    });
  }

  return arr;
};
