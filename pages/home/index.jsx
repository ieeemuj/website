import Head from 'next/head';

// components
import { useEffect, useRef, useState } from 'react';
import {
  Box, Heading, Text, VStack,
} from '@chakra-ui/react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import AboutUsHeader from '../../components/Home/AboutUs/AboutUsHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import AboutUsContent from '../../components/Home/AboutUs/AboutUsContent';
import TestimonialHeader from '../../components/Home/Testimonial/TestimonialHeader';
import TestimonialContent from '../../components/Home/Testimonial/TestimonialContent';
import JoinUsBanner from '../../components/Layout/JoinUsBanner';
import ActiveEventsHeader from '../../components/Events/ActiveEvents/ActiveEventsHeader';

import homeContent from '../../content/pages/home.json';
import { getAllActiveEvents } from '../../lib/events';
import ActiveEventsCarousel from '../../components/Events/ActiveEvents/ActiveEventsCarousel';
import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';

const Home = () => {
  const [activeEventsData, setActiveEventsData] = useState([]);
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    const activeEvents = getAllActiveEvents();
    setActiveEventsData(activeEvents);
  }, []);

  useEffect(() => {
    if (window.screen.width >= 1280) {
      if (!vantaEffect) {
        setVantaEffect(GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          size: 0.8,
          backgroundColor: 0x00132B,
          color: 0x0087ca,
          points: 0,
        }));
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main>
      <Head>
        <title>IEEE SB MUJ</title>
        <meta
          name="description"
          content="IEEE Student Branch Manipal Univeristy Jaipur"
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      </Head>
      <Box
        ref={myRef}
        width="100%"
        bgColor="brand.700"
        height="calc(100vh - 96px)"
      >
        <ResponsiveContainer>
          <VStack
            width="100%"
            height="100vh"
            boxSizing="border-box"
            justify="center"
            alignItems={['center', 'center', 'center', 'center', 'flex-start']}
            // paddingTop="calc(0.2 * 100vh)"
            spacing="5"
          >
            <Heading
              fontSize={['5xl', '5xl', '7xl', '8xl', '7xl', '8xl']}
              color="white"
              textAlign="center"
            >
              Your Vision,
            </Heading>
            <Heading
              fontSize={['5xl', '5xl', '7xl', '8xl', '7xl', '8xl']}
              color="white"
              textAlign="center"
            >
              Our Passion
            </Heading>
            <Text
              width={['100%', '100%', '100%', '100%', '50%']}
              color="white"
              fontSize={['md', 'xl']}
              textAlign={['center', 'center', 'center', 'center', 'left']}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean bibendum sit erat molestie egestas nullam suspendisse.
              Lorem at dapibus ut at vulputate ut lobortis a. Tempus pulvinar felis, convallis eu.
            </Text>
          </VStack>
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

export default Home;
