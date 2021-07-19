import Head from 'next/head';

// components
import { Flex } from '@chakra-ui/react';
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import AboutUsHeader from '../../components/Home/AboutUs/AboutUsHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import AboutUsContent from '../../components/Home/AboutUs/AboutUsContent';
import TestimonialHeader from '../../components/Home/Testimonial/TestimonialHeader';
import TestimonialContent from '../../components/Home/Testimonial/TestimonialContent';
import JoinUsBanner from '../../components/Layout/JoinUsBanner';
import ActiveEventsHeader from '../../components/Events/ActiveEvents/ActiveEventsHeader';
import CardCarousel from '../../components/Events/CardCarousel';
import EventMockData from '../../constants/EventMockData';
import EventCard from '../../components/Events/EventCard';

const Home = () => (
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
        <AboutUsContent />
      </SectionContent>
    </Section>
    <Section
      bgColor="whitesmoke"
    >
      <SectionHeader>
        <ActiveEventsHeader />
      </SectionHeader>
      <SectionContent>
        <CardCarousel>
          {EventMockData.length > 0 ? EventMockData.map((val) => (
            <EventCard
              key={val.key}
              img={val.img}
              category={val.category}
              title={val.title}
              status={val.status}
              more={val.more}
            />
          ))
            : (
              <Flex
                width="320px"
                height="455px"
                justify="center"
                alignItems="center"
              >
                Come back later!
              </Flex>
            )}
        </CardCarousel>
      </SectionContent>
    </Section>
    <Section>
      <SectionHeader>
        <TestimonialHeader />
      </SectionHeader>
      <SectionContent>
        <TestimonialContent />
      </SectionContent>
    </Section>
    <JoinUsBanner />
  </main>
);

export default Home;
