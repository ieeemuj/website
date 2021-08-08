import { gql } from "@apollo/client";
import PrismicClient from "../PrismicClient";

class MembershipData {
  constructor(
    heading,
    headingTagLine,
    reasondesc1,
    reasondesc2,
    reasondesc3,
    reasonheading1,
    reasonheading2,
    reasonheading3
  ) {
    this.heading = heading;
    this.headingTagLine = headingTagLine;
    this.reasondesc1 = reasondesc1;
    this.reasondesc2 = reasondesc2;
    this.reasondesc3 = reasondesc3;
    this.reasonheading1 = reasonheading1;
    this.reasonheading2 = reasonheading2;
    this.reasonheading3 = reasonheading3;
    // this.pastevents = pastevents;
  }

  object() {
    return {
      heading: this.heading,
      headingTagLine: this.headingTagLine,

      reasondesc1: this.reasondesc1,
      reasondesc2: this.reasondesc2,
      reasondesc3: this.reasondesc3,
      reasonheading1: this.reasonheading1,
      reasonheading2: this.reasonheading2,
      reasonheading3: this.reasonheading3,

      // pastevents: this.pastevents,
    };
  }
}

const getMembershipData = async () => {
  const response = await PrismicClient.query({
    query: gql`
      query GetSingleMembershippage {
        membership(uid: "membership", lang: "en-us") {
          heading
          heading_tagline
          reasondesc1
          reasondesc2
          reasondesc3
          reasonheading1
          reasonheading2
          reasonheading3
        }
      }
    `,
  });

  if (response.data.membership) {
    const node = response.data.membership;

    if (node) {
      return new MembershipData(
        node.heading,
        node.heading_tagline,
        node.reasondesc1,
        node.reasondesc2,
        node.reasondesc3,
        node.reasonheading1,
        node.reasonheading2,
        node.reasonheading3
        // node.pastevent
      ).object();
    }
  }

  return null;
};

export default getMembershipData;
