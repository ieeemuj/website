import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import JoinUsBanner from '../../components/Layout/JoinUsBanner';
import Section from '../../components/Home/Section';
import SectionContent from '../../components/Home/Section/SectionContent';
import TeamsContent from '../../components/Teams/TeamsContent';
import TitleHeader from '../../components/Layout/TitleHeader';
import NavLink from '../../components/Layout/Navbar/NavLink';
import FadeInUp from '../../components/FadeInUp';
import getTeamsData from '../../cms/queries/teams';

const AboutUs = ({ teamsData }) => (
  <main>
    <TitleHeader>
      <FadeInUp>
        <Heading
          size="lg"
          textAlign="center"
          color="white"
          backgroundColor="brand.700"
          padding="16px"
          rounded="lg"
        >
          TEAMS
        </Heading>
        <Text
          fontSize="lg"
          color="white"
          textAlign="center"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          Looking for Website Team?
          <NavLink to="/credits">
            <span>WEBSITE CREDITS</span>
          </NavLink>
        </Text>
      </FadeInUp>
    </TitleHeader>
    <Section>
      <FadeInUp>
        <SectionContent>
          <TeamsContent
            teamsData={teamsData}
          />
        </SectionContent>
      </FadeInUp>
    </Section>
    <FadeInUp>
      <JoinUsBanner />
    </FadeInUp>
  </main>
);

export async function getStaticProps() {
  const teamsData = await getTeamsData();

  if (teamsData) {
    return {
      props: {
        teamsData,
      },
    };
  }
  return {
    notFound: false,
  };
}

export default AboutUs;
