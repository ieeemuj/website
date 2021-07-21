import Head from 'next/head';

// components
import { useEffect, useState } from 'react';
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

const Home = () => {
  const [activeEventsData, setActiveEventsData] = useState([]);
  useEffect(() => {
    const activeEvents = getAllActiveEvents();
    setActiveEventsData(activeEvents);
  }, []);
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
