import { gql } from '@apollo/client';

import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class CreditsData {
  constructor(team, technologyLogos, body) {
    this.team = CreditsData.mapToMember(team);
    this.technologyLogos = technologyLogos;
    this.seo = new SEO(body);
  }

  static mapToMember(group) {
    return group.map((type) => type.member).map((member) => ({
      ...member,
      linkedIn: member.linkedin ? member.linkedin.url : null,
      instagram: member.instagram ? member.instagram.url : null,
      github: member.github ? member.github.url : null,
      twitter: member.twitter ? member.twitter.url : null,
      behance: member.behance ? member.behance.url : null,
    }));
  }

  object() {
    return {
      team: this.team,
      technologyLogos: this.technologyLogos,
      seo: this.seo.object(),
    };
  }
}

const getCreditsData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query CreditsPage {
        credits_page(uid: "credits-page", lang: "en-us") {
          team {
            member {
              ...devDetails
            }
          }
          technology_logos {
            logo
          }
          body {
            ... on Credits_pageBodySocial_card {
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

      fragment devDetails on Member {
        image
        title
        dev_position
        linkedin {
          ... on _ExternalLink {
            url
          }
        }
        instagram {
          ... on _ExternalLink {
            url
          }
        }
        github {
          ... on _ExternalLink {
            url
          }
        }
        twitter {
          ... on _ExternalLink {
            url
          }
        }
        behance {
          ... on _ExternalLink {
            url
          }
        }
      }
    `,
  });

  if (response.data) {
    const node = response.data.credits_page;

    if (node) {
      return new CreditsData(
        node.team,
        node.technology_logos,
        node.body,
      ).object();
    }
  }

  return null;
};

export default getCreditsData;
