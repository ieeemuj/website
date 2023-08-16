import { gql } from "@apollo/client";

import PrismicClient from "../PrismicClient";
import SEO from "../seo/SEO";

class TeamsData {
  constructor(
    faculty,
    advisors,
    ecSb,
    ocSb,
    ccSb,
    ecCs,
    ccCs,
    ttCS,
    ecWie,
    ocWie,
    ccWie,
    body
  ) {
    this.faculty = TeamsData.mapToMember(faculty);
    this.advisors = TeamsData.mapToMember(advisors);
    this.ecSb = TeamsData.mapToMember(ecSb);
    this.ocSb = TeamsData.mapToMember(ocSb);
    this.ccSb = TeamsData.mapToMember(ccSb);
    this.ecCs = TeamsData.mapToMember(ecCs);
    this.ccCs = TeamsData.mapToMember(ccCs);
    this.ttCS = TeamsData.mapToMember(ttCS);
    this.ecWie = TeamsData.mapToMember(ecWie);
    this.ocWie = TeamsData.mapToMember(ocWie);
    this.ccWie = TeamsData.mapToMember(ccWie);
    this.seo = new SEO(body);
  }

  static mapToMember(group) {
    return group
      .map((type) => type.member)
      .map((member) => ({
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
      faculty: this.faculty,
      advisors: this.advisors,
      ecSb: this.ecSb,
      ocSb: this.ocSb,
      ccSb: this.ccSb,
      ecCs: this.ecCs,
      ccCs: this.ccCs,
      ttCS: this.ttCS,
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
        teams_page(uid: "teams-page1", lang: "en-us") {
          faculty {
            member {
              ...memberDetails
            }
          }
          advisors {
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
          tt_cs {
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
        year1
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
    const node = response.data.teams_page;

    if (node) {
      return new TeamsData(
        node.faculty,
        node.advisors,
        node.ec_sb,
        node.oc_sb,
        node.cc_sb,
        node.ec_cs,
        node.cc_cs,
        node.tt_cs,
        node.ec_wie,
        node.oc_wie,
        node.cc_wie,
        node.body
      ).object();
    }
  }

  return null;
};

export default getTeamsData;
