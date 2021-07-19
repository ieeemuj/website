import React from 'react';
import { Flex } from '@chakra-ui/react';
import CardCarousel from '../../components/Events/CardCarousel';
import EventMockData from '../../constants/EventMockData';
import EventCard from '../../components/Events/EventCard';
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import ActiveEventsHeader from '../../components/Events/ActiveEvents/ActiveEventsHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import PastEventsHeader from '../../components/Events/PastEvents/PastEventsHeader';
import PastEventsGrid from '../../components/Events/PastEvents/PastEventsGrid';

const Events = () => (
  <main>
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
        <PastEventsHeader />
      </SectionHeader>
      <SectionContent>
        <PastEventsGrid />
      </SectionContent>
    </Section>
  </main>
);

export default Events;
