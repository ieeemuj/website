import { gql } from '@apollo/client';
import PrismicClient from '../PrismicClient';

export const getEventByUID = async (uid) => {
  const response = await PrismicClient.query({
    query: gql`
    query GetEventByUID {
      event(uid: \"${uid}\", lang: \"en-us\") {
        title,
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
    return response.data.event;
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
    }
    `,
  });

  const arr = [];

  if (response.data.allEvents) {
    const nodes = response.data.allEvents.edges;
    nodes.forEach((event) => arr.push(event.node._meta.uid));
  }

  return arr;
};
