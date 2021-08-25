import React from 'react';
// import { useState, useRef, useEffect } from "react";
import {
  SimpleGrid, Heading, Button, Link, Text, Flex,
} from '@chakra-ui/react';

import { NextSeo } from 'next-seo';
import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import Slideshow from '../../components/MembershipDrive/Slideshow';
import Benefits from '../../components/MembershipDrive/Benefits';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';

import getMembershipData from '../../cms/queries/membership';

const Membership = ({ membershipData }) => (
  <main>
    <NextSeo
      title={membershipData.seo.title}
      description={membershipData.seo.description}
      canonical="https://ieeemuj.com/membership"
      openGraph={{
        description: membershipData.seo.description,
        images: [
          {
            height: membershipData.seo.image.dimensions.height,
            width: membershipData.seo.image.dimensions.width,
            url: membershipData.seo.image.url,
            alt: membershipData.seo.image.alt,
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
          padding="16px"
          rounded="lg"
        >
          Membership
        </Heading>
        <Text
          fontSize="lg"
          color="white"
          textAlign="center"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          Become the future of engineering.
        </Text>
      </FadeInUp>
    </TitleHeader>
    <ResponsiveContainer>
      <FadeInUp>
        <Flex
          py="48px"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Heading
            as="h3"
            py={4}
            size="md"
            textAlign="center"
          >
            Registration is now Open! What are you waiting for?
          </Heading>
          <Link
            target="_blank"
            href="https://www.ieee.org/membership/join/index.html"
          >
            <Button
              bgColor="brand.700"
              boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
              padding="16px"
              rounded="lg"
              color="white"
              _hover={{
                border: 'none',
                textDecoration: 'none',
              }}
              _active={{
                border: 'none',
                boxShadow: 'none',
                transform: 'scale(0.97)',
              }}
              _focus={{
                border: 'none',
                boxShadow: 'none',
                bg: 'brand',
              }}
            >
              JOIN NOW
            </Button>
          </Link>
        </Flex>
      </FadeInUp>
      <hr />
      <FadeInUp>
        <SimpleGrid
          py="48px"
          columns={['1', '1', '1', '1', '3']}
          spacing="16"
        >
          <Benefits data={membershipData.reason1} />
          <Benefits data={membershipData.reason2} />
          <Benefits data={membershipData.reason3} />
        </SimpleGrid>
      </FadeInUp>
      <hr />
      <FadeInUp>
        <SimpleGrid
          py="48px"
          columns={2}
          spacingX="90px"
          minChildWidth="200px"
        >
          <Heading
            as="h7"
            size="md"
            width="100%"
            textAlign="center"
          >
            Glimpse of what we do
          </Heading>
        </SimpleGrid>
      </FadeInUp>
      <FadeInUp>
        <SimpleGrid
          py="32px"
          columns={4}
          spacingX="80px"
          spacingY="90px"
          minChildWidth="150px"
        >
          <Slideshow gallery={membershipData.gallery} />
        </SimpleGrid>
      </FadeInUp>
    </ResponsiveContainer>
  </main>
);

export async function getStaticProps() {
  const membershipData = await getMembershipData();

  if (membershipData) {
    return {
      props: {
        membershipData,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Membership;
