import { gql } from '@apollo/client';

import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class FacultyMessageData {
  constructor(name, position, image, message, body, uid) {
    this.name = name;
    this.position = position;
    this.image = image;
    this.message = message;
    this.seo = new SEO(body);
    this.uid = uid;
  }

  object() {
    return {
      name: this.name,
      position: this.position,
      image: this.image,
      message: this.message,
      seo: this.seo.object(),
      uid: this.uid,
    };
  }
}

export const getFacultyMessageByUID = async (uid) => {
  const response = await PrismicClient.query({
    query: gql`
      query GetFacultyMessageByUUID {
        faculty_messages(uid: "${uid}", lang: "en-us") {
          name
          position
          image
          message
          body {
            ... on Faculty_messagesBodySocial_card {
              type
              primary {
                page_title
                description
                image
                twitter_handle
                twitter_card_type
              }
            }
          }
          _meta {
            uid
          }
        }
      }
    `,
  });

  if (response.data.faculty_messages) {
    const event = new FacultyMessageData(
      response.data.faculty_messages.name,
      response.data.faculty_messages.position,
      response.data.faculty_messages.image,
      response.data.faculty_messages.message,
      response.data.faculty_messages.body,
      response.data.faculty_messages._meta.uid,
    );

    return event.object();
  }

  return null;
};

export const getAllFacultyMessageNameSlug = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query GetAllFacultyMessagesSlugs {
        allFaculty_messagess {
          edges {
            node {
              name
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
  });

  const slugArr = [];
  const nameArr = [];

  if (response.data.allFaculty_messagess) {
    const nodes = response.data.allFaculty_messagess.edges;
    nodes.forEach((event) => {
      slugArr.push(event.node._meta.uid);
      nameArr.push(event.node.name);
    });
  }

  return [slugArr, nameArr];
};
