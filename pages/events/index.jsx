import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { Heading, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import ActiveEventsHeader from '../../components/Events/ActiveEvents/ActiveEventsHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import PastEventsHeader from '../../components/Events/PastEvents/PastEventsHeader';
import PastEventsGrid from '../../components/Events/PastEvents/PastEventsGrid';

import ActiveEventsCarousel from '../../components/Events/ActiveEvents/ActiveEventsCarousel';
import { getAllEvents } from '../../cms/queries/event';
import getStatus from '../../utils';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';

const Events = ({ allEvents }) => {
  const [activeEventsData, setActiveEventsData] = useState([]);
  const [pastEventsData, setPastEventsData] = useState([]);

  useEffect(() => {
    const tempActive = [];
    const tempPast = [];
    allEvents.forEach((eventObj) => {
      const tempObj = eventObj;
      const status = getStatus(tempObj.startISO, tempObj.endISO);

      if (status === 'COMPLETED') {
        tempObj.status = status;
        delete tempObj.linkToRegistrationForm;
        tempPast.push(tempObj);
      } else {
        if (status === 'ONGOING') {
          delete tempObj.linkToRegistrationForm;
        }
        tempObj.status = status;
        tempActive.push(tempObj);
      }
    });

    tempActive.sort((a, b) => {
      const dta = DateTime.fromISO(a.startISO);
      const dtb = DateTime.fromISO(b.startISO);

      return dta.toMillis() - dtb.toMillis();
    });

    tempPast.sort((a, b) => {
      const dta = DateTime.fromISO(a.startISO);
      const dtb = DateTime.fromISO(b.startISO);

      return dtb.toMillis() - dta.toMillis();
    });

    setActiveEventsData(tempActive);
    setPastEventsData(tempPast);
  }, [allEvents]);

  return (
    <main>
      <TitleHeader>
        <NextSeo
          title="Events"
          canonical="https://ieeemuj.com/events"
        />
        <FadeInUp>
          <Heading
            size="lg"
            textAlign="center"
            color="white"
            backgroundColor="brand.700"
            padding="16px"
            rounded="lg"
          >
            EVENTS
          </Heading>
          <Text
            fontSize="lg"
            color="white"
            textAlign="center"
            backgroundColor="brand.700"
            padding="8px"
            rounded="lg"
          >
            “The only source of knowledge is experience.” - Albert Einstein
          </Text>
        </FadeInUp>
      </TitleHeader>
      {activeEventsData.length > 0 && (
        <Section
          bgColor="gray.50"
        >
          <FadeInUp>
            <SectionHeader>
              <ActiveEventsHeader />
            </SectionHeader>
            <SectionContent>
              <ActiveEventsCarousel
                activeEventsData={activeEventsData}
              />
            </SectionContent>
          </FadeInUp>
        </Section>
      )}
      <Section>
        <SectionHeader>
          <PastEventsHeader />
        </SectionHeader>
        <SectionContent>
          <PastEventsGrid
            allEventsData={pastEventsData}
          />
        </SectionContent>
      </Section>
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

export default Events;
