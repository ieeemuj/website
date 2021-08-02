import { gql } from '@apollo/client';

import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class ContactUsData {
  constructor(address, contacts, body, uid) {
    this.address = address;
    this.contacts = contacts;
    this.seo = new SEO(body);
    this.uid = uid;
  }

  object() {
    return {
      address: this.address,
      contacts: this.contacts,
      seo: this.seo.object(),
      uid: this.uid,
    };
  }
}

const getContactUsData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query GetContactUs {
        contact_us(uid: "contactus", lang: "en-us") {
          address
          contacts {
            name
            indian_mobile_number
            position
          }
          body {
            ... on Contact_usBodySocial_card {
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

  if (response.data.contact_us) {
    const node = response.data.contact_us;

    if (node) {
      return new ContactUsData(
        node.address,
        node.contacts,
        node.body,
        node._meta.uid,
      ).object();
    }
  }

  return null;
};

export default getContactUsData;
