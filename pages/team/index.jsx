import React, { useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import JoinUsBanner from '../../components/Layout/JoinUsBanner';
import Section from '../../components/Home/Section';
import SectionContent from '../../components/Home/Section/SectionContent';
import TeamsContent from '../../components/Teams/TeamsContent';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';
import getTeamsData from '../../cms/queries/teams';
import NextLink from '../../components/NextLink';

const AboutUs = ({ teamsData }) => {
  return (
    <main>
      <NextSeo
        title={teamsData.seo.title}
        description={teamsData.seo.description}
        canonical="https://ieeemuj.com/team"
        openGraph={{
          description: teamsData.seo.description,
          images: [
            {
              height: teamsData.seo.image.dimensions.height,
              width: teamsData.seo.image.dimensions.width,
              url: teamsData.seo.image.url,
              alt: teamsData.seo.image.alt,
            },
          ],
        }}
      />
      <TitleHeader>
        <FadeInUp>
          <Heading
            as="h1"
            size="lg"
            textAlign="center"
            color="white"
            backgroundColor="brand.700"
            padding="8px"
            rounded="lg"
          >
            TEAM
          </Heading>
          <Text
            fontSize="md"
            color="gray.200"
            textAlign="center"
            backgroundColor="brand.700"
            padding="8px"
            rounded="lg"
          >
            Looking for Website Team?
            <br />
            <NextLink color="white" to="/credits">
              <span>Click Here.</span>
            </NextLink>
          </Text>
        </FadeInUp>
      </TitleHeader>
      <Section>
        <SectionContent>
          <TeamsContent teamsData={teamsData} />
        </SectionContent>
      </Section>
      <FadeInUp>
        <JoinUsBanner />
      </FadeInUp>
    </main>
  );
};

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
