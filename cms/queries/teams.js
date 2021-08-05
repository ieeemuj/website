import { gql } from '@apollo/client';

import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class TeamsData {
  constructor(faculty, ecSb, ocSb, ccSb, ecCs, ocCs, ccCs, ecWie, ocWie, ccWie, body) {
    this.faculty = TeamsData.mapToMember(faculty);
    this.ecSb = TeamsData.mapToMember(ecSb);
    this.ocSb = TeamsData.mapToMember(ocSb);
    this.ccSb = TeamsData.mapToMember(ccSb);
    this.ecCs = TeamsData.mapToMember(ecCs);
    this.ocCs = TeamsData.mapToMember(ocCs);
    this.ccCs = TeamsData.mapToMember(ccCs);
    this.ecWie = TeamsData.mapToMember(ecWie);
    this.ocWie = TeamsData.mapToMember(ocWie);
    this.ccWie = TeamsData.mapToMember(ccWie);
    this.seo = new SEO(body);
  }

  static mapToMember(group) {
    return group.map((type) => type.member);
  }

  object() {
    return {
      faculty: this.faculty,
      ecSb: this.ecSb,
      ocSb: this.ocSb,
      ccSb: this.ccSb,
      ecCs: this.ecCs,
      ocCs: this.ocCs,
      ccCs: this.ccCs,
      ecWie: this.ecWie,
      ocWie: this.ocWie,
      ccWie: this.ccWie,
      seo: this.seo.object(),
    };
  }
}

const getTeamsData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query GetTeamsPage {
      teams_page(uid: "teams-page", lang: "en-us") {
        faculty {
          member {
            ...memberDetails
          }
        }
        ec_sb {
          member {
            ...memberDetails
          }
        }
        oc_sb {
          member {
            ...memberDetails
          }
        }
        cc_sb {
          member {
            ...memberDetails
          }
        }
        ec_cs {
          member {
            ...memberDetails
          }
        }
        oc_cs {
          member {
            ...memberDetails
          }
        }
        cc_cs {
          member {
            ...memberDetails
          }
        }
        ec_wie {
          member {
            ...memberDetails
          }
        }
        oc_wie {
          member {
            ...memberDetails
          }
        }
        cc_wie {
          member {
            ...memberDetails
          }
        }
        body {
          ... on Teams_pageBodySocial_card {
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
      }
    }

    fragment memberDetails on Member {
      image
      title
      position
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
    }
    `,
  });

  if (response.data) {
    const node = response.data.teams_page;

    if (node) {
      return new TeamsData(
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.ec_wie,
        node.body,
      ).object();
    }
  }

  return null;
};

export default getTeamsData;
