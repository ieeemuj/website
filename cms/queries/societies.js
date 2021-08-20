import { gql } from '@apollo/client';

import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class SocietiesData {
  constructor(societies, body, uid) {
    this.societies = societies;
    this.seo = new SEO(body);
    this.uid = uid;
  }

  object() {
    return {
      societies: this.societies,
      seo: this.seo.object(),
      uid: this.uid,
    };
  }
}

const getSocietiesData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query GetSocieties {
        societies_page(uid: "societies", lang: "en-us") {
          societies {
            name
            logo
            description
            website {
              ... on _ExternalLink {
                url
              }
            }
            instagram {
              ... on _ExternalLink {
                url
              }
            }
            linkedin {
              ... on _ExternalLink {
                url
              }
            }
          }
          body {
            ... on Societies_pageBodySocial_card {
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

  if (response.data.societies_page) {
    const node = response.data.societies_page;

    if (node) {
      return new SocietiesData(
        node.societies,
        node.body,
        node._meta.uid,
      ).object();
    }
  }

  return null;
};

export default getSocietiesData;
