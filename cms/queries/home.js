import { gql } from '@apollo/client';

import PrismicClient from '../PrismicClient';
import SEO from '../seo/SEO';

class HomeData {
  constructor(headerTagLine, headerSubTagLine, aboutIEEE, aboutIEEESBMUJ, ieeeSBVision,
    ieeeSBMission, testimonials, stats, featuredText, featuredButtonText,
    featuredButtonLink, body, uid) {
    this.headerTagLine = headerTagLine;
    this.headerSubTagLine = headerSubTagLine;
    this.aboutIEEE = aboutIEEE;
    this.aboutIEEESBMUJ = aboutIEEESBMUJ;
    this.ieeeSBVision = ieeeSBVision;
    this.ieeeSBMission = ieeeSBMission;
    this.testimonials = testimonials;
    this.stats = stats;
    this.featuredText = featuredText;
    this.featuredButtonText = featuredButtonText;
    this.featuredButtonLink = featuredButtonLink;
    this.seo = new SEO(body);
    this.uid = uid;
  }

  object() {
    return {
      headerTagLine: this.headerTagLine,
      headerSubTagLine: this.headerSubTagLine,
      aboutIEEE: this.aboutIEEE,
      aboutIEEESBMUJ: this.aboutIEEESBMUJ,
      ieeeSBVision: this.ieeeSBVision,
      ieeeSBMission: this.ieeeSBMission,
      testimonials: this.testimonials,
      stats: this.stats,
      featuredText: this.featuredText,
      featuredButtonText: this.featuredButtonText,
      featuredButtonLink: this.featuredButtonLink,
      seo: this.seo.object(),
      uid: this.uid,
    };
  }
}

const getHomeData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query GetSingleHomepage {
        homepage(uid: "home", lang:"en-us") {
          header_tagline
          header_sub_tagline
          about_ieee
          about_ieee_sb_muj
          ieee_sb_muj_vision
          ieee_sb_muj_mission
          testimonial {
            author_profile_pic
            testimonial_text
            testimonial_author
            testimonial_author_title
          },
          stats {
            statistic_number
            statistic_subject
          }
          featured_text
          featured_button_text
          featured_button_link
          body {
            ... on HomepageBodySocial_card {
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

  if (response.data.homepage) {
    const node = response.data.homepage;

    if (node) {
      return new HomeData(
        node.header_tagline,
        node.header_sub_tagline,
        node.about_ieee,
        node.about_ieee_sb_muj,
        node.ieee_sb_muj_vision,
        node.ieee_sb_muj_mission,
        node.testimonial,
        node.stats,
        node.featured_text,
        node.featured_button_text,
        node.featured_button_link,
        node.body,
        node._meta.uid,
      ).object();
    }
  }

  return null;
};

export default getHomeData;
