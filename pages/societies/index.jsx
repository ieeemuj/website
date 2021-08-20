import React from 'react';
import {
  Heading, Text, Box,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import SectionContent from '../../components/Home/Section/SectionContent';
import SocietiesContent from '../../components/Societies/SocietiesContent';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';

import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import getSocietiesData from '../../cms/queries/societies';

const Societies = ({ societiesData }) => (
  <main>
    <NextSeo
      title={societiesData.seo.title}
      description={societiesData.seo.description}
      canonical="https://ieeemuj.com/societies"
      openGraph={{
        description: societiesData.seo.description,
        images: [
          {
            height: societiesData.seo.image.dimensions.height,
            width: societiesData.seo.image.dimensions.width,
            url: societiesData.seo.image.url,
            alt: societiesData.seo.image.alt,
          },
        ],
      }}
    />
    <TitleHeader>
      <FadeInUp>
        <Heading
          size="lg"
          textAlign="center"
          color="white"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          SOCIETIES
        </Heading>
        <Text
          fontSize="md"
          color="gray.200"
          textAlign="center"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          Take advantage of specialized opportunities.
        </Text>
      </FadeInUp>
    </TitleHeader>
    <Box
      marginBottom="3rem"
    >
      {societiesData.societies.map((society, index) => (
        <Box
          paddingTop="32px"
          paddingBottom="32px"
          key={society.title}
        >
          <ResponsiveContainer>
            <FadeInUp>
              <SectionContent>
                <SocietiesContent
                  society={society}
                  reverse={(index + 1) % 2 === 0}
                />
              </SectionContent>
            </FadeInUp>
          </ResponsiveContainer>
        </Box>
      ))}
    </Box>
  </main>
);

export async function getStaticProps() {
  const societiesData = await getSocietiesData();

  if (societiesData) {
    return {
      props: {
        societiesData,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Societies;
