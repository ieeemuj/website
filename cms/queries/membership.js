import { gql } from '@apollo/client';
import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class MembershipData {
  constructor(gallery, reason1Title, reason1Reasons, reason2Title, reason2Reasons,
    reason3Title, reason3Reasons, body, uid) {
    this.gallery = gallery;
    this.reason1 = {
      title: reason1Title,
      reasons: reason1Reasons,
    };
    this.reason2 = {
      title: reason2Title,
      reasons: reason2Reasons,
    };
    this.reason3 = {
      title: reason3Title,
      reasons: reason3Reasons,
    };
    this.seo = new SEO(body);
    this.uid = uid;
  }

  object() {
    return {
      gallery: this.gallery,
      reason1: this.reason1,
      reason2: this.reason2,
      reason3: this.reason3,
      seo: this.seo.object(),
      uid: this.uid,
    };
  }
}

const getMembershipData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query GetMembershipPage {
        membership_page(uid: "membership-page", lang: "en-us") {
          gallery {
            image
          }
          reason_1_title
          reason_1_reasons {
            icon
            heading
            text
          }
          reason_2_title
          reason_2_reasons {
            icon
            heading
            text
          }
          reason_3_title
          reason_3_reasons {
            icon
            heading
            text
          }
          body {
            ... on Membership_pageBodySocial_card {
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

  if (response.data.membership_page) {
    const node = response.data.membership_page;

    if (node) {
      return new MembershipData(
        node.gallery,
        node.reason_1_title,
        node.reason_1_reasons,
        node.reason_2_title,
        node.reason_2_reasons,
        node.reason_3_title,
        node.reason_3_reasons,
        node.body,
        node._meta.uid,
      ).object();
    }
  }

  return null;
};

export default getMembershipData;
