import { gql } from '@apollo/client';
import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class JoinUsData {
  constructor(gallery, registrationForm, reasons, societies, body, uid) {
    this.gallery = gallery;
    this.registrationFormLink = registrationForm ? registrationForm.url : null;
    this.reasons = reasons.map((reason) => ({
      title: reason.title,
      summary: reason.summary,
    }));
    this.societies = societies.map((society) => ({
      logo: society.logo ? society.logo.url : null,
      name: society.name,
      summary: society.summary,
    }));
    this.seo = new SEO(body);
    this.uid = uid;
  }

  object() {
    return {
      gallery: this.gallery,
      registrationFormLink: this.registrationFormLink,
      reasons: this.reasons,
      societies: this.societies,
      seo: this.seo.object(),
      uid: this.uid,
    };
  }
}

const getJoinUsData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query JoinUsPage {
        join_us_page(uid: "join-us-page", lang: "en-us") {
          gallery {
            image
          }
          registration_form {
            ... on _ExternalLink {
              url
            }
          }
          reasons {
            title
            summary
          }
          societies {
            logo
            name
            summary
          }
          body {
            ... on Join_us_pageBodySocial_card {
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

  if (response.data.join_us_page) {
    const node = response.data.join_us_page;

    if (node) {
      return new JoinUsData(
        node.gallery,
        node.registration_form,
        node.reasons,
        node.societies,
        node.body,
        node._meta.uid,
      ).object();
    }
  }

  return null;
};

export default getJoinUsData;
