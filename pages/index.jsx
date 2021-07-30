import Head from 'next/head';
import NextLink from 'next/link';

import { useEffect, useRef, useState } from 'react';
import {
  Box, Button, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { RichText } from 'prismic-reactjs';
import Section from '../components/Home/Section';
import SectionHeader from '../components/Home/Section/SectionHeader';
import AboutUsHeader from '../components/Home/AboutUs/AboutUsHeader';
import SectionContent from '../components/Home/Section/SectionContent';
import AboutUsContent from '../components/Home/AboutUs/AboutUsContent';
import TestimonialHeader from '../components/Home/Testimonial/TestimonialHeader';
import TestimonialContent from '../components/Home/Testimonial/TestimonialContent';
import JoinUsBanner from '../components/Layout/JoinUsBanner';
import ActiveEventsHeader from '../components/Events/ActiveEvents/ActiveEventsHeader';

import ActiveEventsCarousel from '../components/Events/ActiveEvents/ActiveEventsCarousel';
import ResponsiveContainer from '../components/Layout/ResponsiveContainer';
import HeaderSvg from '../public/svg/header.svg';
import { getAllEvents } from '../cms/queries/event';
import getStatus from '../utils';

import styles from '../styles/ScrollIndicator.module.css';
import getHomeData from '../cms/queries/home';

const Home = ({ allEvents, homeData }) => {
  const [activeEventsData, setActiveEventsData] = useState([]);
  const myRef = useRef(null);

  useEffect(() => {
    const tempActive = [];
    allEvents.forEach((eventObj) => {
      const tempObj = eventObj;
      const status = getStatus(tempObj.startISO, tempObj.endISO);

      if (status !== 'COMPLETED') {
        tempObj.status = status;
        tempActive.push(tempObj);
      }
    });

    tempActive.sort((a, b) => {
      const dta = DateTime.fromISO(a.startISO);
      const dtb = DateTime.fromISO(b.startISO);

      return dta.toMillis() - dtb.toMillis();
    });

    setActiveEventsData(tempActive);
  }, [allEvents]);

  return (
    <main>
      <Head>
        <title>IEEE SB MUJ</title>
        <meta
          name="description"
          content="IEEE Student Branch Manipal Univeristy Jaipur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        ref={myRef}
        width="100%"
        bgColor="brand.700"
        height="calc(100vh - 96px)"
        borderBottom="solid #0087ca"
      >
        <ResponsiveContainer>
          <HStack
            position="relative"
            height="calc(100vh - 96px)"
            width="100%"
            spacing="7"
          >
            <VStack
              width={['100%', '100%', '100%', '100%', '45%']}
              height="calc(100vh - 96px)"
              boxSizing="border-box"
              justify={['center', 'center', 'center', 'center', 'start']}
              py={['0px', '0px', '0px', '0px', '64px']}
              alignItems={['center', 'center', 'center', 'center', 'flex-start']}
              spacing="10"
            >
              <Heading
                fontSize={['4xl', '5xl', '7xl', '7xl', '6xl', '6xl']}
                color="white"
                textAlign={['center', 'center', 'center', 'center', 'left']}
              >
                {homeData.headerTagLine}
              </Heading>
              <Text
                width={['100%', '100%', '100%', '100%', '100%']}
                color="white"
                fontSize={['md', 'xl']}
                textAlign={['center', 'center', 'center', 'center', 'left']}
              >
                {RichText.render(homeData.headerSubTagLine)}
              </Text>
              <Box
                width="100%"
                height="100px"
              >
                <VStack
                  justify={['center', 'center', 'center', 'center', 'start']}
                  alignItems={['center', 'center', 'center', 'center', 'flex-start']}
                  spacing="5"
                >
                  <Text
                    width={['100%', '100%', '100%', '100%', '100%']}
                    color="white"
                    fontSize={['md', 'xl']}
                    textAlign={['center', 'center', 'center', 'center', 'left']}
                  >
                    {homeData.featuredText}
                  </Text>
                  <NextLink
                    href={homeData.featuredButtonLink}
                    passHref
                  >
                    <Button
                      as={Link}
                      bg="white"
                      boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
                      padding="32px"
                      rounded="lg"
                      color="brand"
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
                      {homeData.featuredButtonText}
                    </Button>
                  </NextLink>
                </VStack>
              </Box>
              <Box
                className={styles.scrollIndicator}
                display={['none', 'none', 'none', 'none', 'flex']}
              >
                <span>Scroll</span>
              </Box>
            </VStack>
            <Box
              display={['none', 'none', 'none', 'none', 'inline-block']}
              width="60%"
              height="100%"
            >
              <HeaderSvg height="100%" />
            </Box>
          </HStack>
        </ResponsiveContainer>
      </Box>
      <Section>
        <SectionHeader>
          <AboutUsHeader />
        </SectionHeader>
        <SectionContent>
          <AboutUsContent
            aboutIEEE={homeData.aboutIEEE}
            aboutIEEESBMUJ={homeData.aboutIEEESBMUJ}
            visionText={homeData.ieeeSBVision}
            missionText={homeData.ieeeSBMission}
            stats={homeData.stats}
          />
        </SectionContent>
      </Section>
      <Section
        bgColor="whitesmoke"
      >
        <SectionHeader>
          <ActiveEventsHeader />
        </SectionHeader>
        <SectionContent>
          <ActiveEventsCarousel
            activeEventsData={activeEventsData}
          />
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <TestimonialHeader />
        </SectionHeader>
        <SectionContent>
          <TestimonialContent testimonials={homeData.testimonials} />
        </SectionContent>
      </Section>
      <JoinUsBanner />
    </main>
  );
};

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  const homeData = await getHomeData();

  if (allEvents) {
    return {
      props: {
        allEvents,
        homeData,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Home;
