import Head from 'next/head';

// components
import { useEffect, useRef, useState } from 'react';
import {
  Box, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import Section from '../components/Home/Section';
import SectionHeader from '../components/Home/Section/SectionHeader';
import AboutUsHeader from '../components/Home/AboutUs/AboutUsHeader';
import SectionContent from '../components/Home/Section/SectionContent';
import AboutUsContent from '../components/Home/AboutUs/AboutUsContent';
import TestimonialHeader from '../components/Home/Testimonial/TestimonialHeader';
import TestimonialContent from '../components/Home/Testimonial/TestimonialContent';
import JoinUsBanner from '../components/Layout/JoinUsBanner';
import ActiveEventsHeader from '../components/Events/ActiveEvents/ActiveEventsHeader';

import homeContent from '../content/pages/home.json';
import ActiveEventsCarousel from '../components/Events/ActiveEvents/ActiveEventsCarousel';
import ResponsiveContainer from '../components/Layout/ResponsiveContainer';
import HeaderSvg from '../public/svg/header.svg';
import { getAllEvents } from '../cms/queries/event';
import getStatus from '../utils';

const Home = ({ allEvents }) => {
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
            height="calc(100vh - 96px)"
            width="100%"
            spacing="10"
          >
            <VStack
              width={['100%', '100%', '100%', '100%', '45%']}
              height="calc(100vh - 96px)"
              boxSizing="border-box"
              justify="center"
              alignItems={['center', 'center', 'center', 'center', 'flex-start']}
              spacing="5"
            >
              <Heading
                fontSize={['5xl', '6xl', '7xl', '7xl', '6xl', '6xl']}
                color="white"
                textAlign={['center', 'center', 'center', 'center', 'left']}
              >
                Your Growth is our Success.
              </Heading>
              <Text
                width={['100%', '100%', '100%', '100%', '100%']}
                color="white"
                fontSize={['md', 'xl']}
                textAlign={['center', 'center', 'center', 'center', 'left']}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean bibendum sit erat molestie egestas nullam suspendisse.
                Lorem at dapibus ut at vulputate ut lobortis a. Tempus pulvinar felis, convallis eu.
              </Text>
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
            visionText={homeContent.vision}
            missionText={homeContent.mission}
            stats={homeContent.stats}
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
          <TestimonialContent testimonials={homeContent.testimonials} />
        </SectionContent>
      </Section>
      <JoinUsBanner />
    </main>
  );
};

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  if (allEvents) {
    return {
      props: {
        allEvents,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Home;
