import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import {
  Heading,
  Text,
  Box,
  Stack,
  Input,
} from '@chakra-ui/react';
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
import FitlerDropdown from '../../components/Events/EventControl/FilterDropdown';
// import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';

const Events = ({ allEvents }) => {
  const [activeEventsData, setActiveEventsData] = useState([]);
  const [pastEventsData, setPastEventsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [searchState, setSearchState] = useState('');
  const [yearState, setYearState] = useState('2021');
  const [societyState, setSocietyState] = useState('All Societies');

  useEffect(() => {
    const tempActive = [];
    const tempPast = [];
    allEvents.forEach((eventObj) => {
      const tempObj = eventObj;
      const status = getStatus(tempObj.startISO, tempObj.endISO);

      if (status === 'COMPLETED') {
        tempObj.status = status;
        tempPast.push(tempObj);
      } else {
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
    setFilteredData(tempPast);
  }, [allEvents]);

  useEffect(() => {
    let tempData = pastEventsData;
    if (societyState !== 'All Societies') {
      if (societyState === 'SB MUJ') {
        tempData = tempData.filter((eventObj) => eventObj.club === 'SB');
      } else if (societyState === 'CS MUJ') {
        tempData = tempData.filter((eventObj) => eventObj.club === 'CS');
      } else if (societyState === 'WIE MUJ') {
        tempData = tempData.filter((eventObj) => eventObj.club === 'WIE');
      }
    }
    tempData = tempData.filter(
      (eventObj) => DateTime.fromISO(eventObj.startISO).year === parseInt(yearState, 10),
    );
    if (searchState !== '') {
      tempData = tempData.filter((eventObj) => eventObj.prismicTitle[0].text.includes(searchState));
    }
    setFilteredData(tempData);
  }, [societyState, yearState, searchState, pastEventsData]);

  return (
    <main>
      <TitleHeader>
        <NextSeo
          title="Events"
          canonical="https://ieeemuj.com/events"
        />
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
            EVENTS
          </Heading>
          <Text
            fontSize="md"
            color="gray.200"
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
        {/* </Section> */}
        <Box
          width="100%"
          bgColor="white"
          paddingTop="16px"
          paddingBottom="16px"
        >
          <Stack
            alignItems="center"
            flexGrow="1"
            width="100%"
            direction={['column', 'column', 'column', 'row']}
          >
            <Input
              type="search"
              paddingX="32px"
              // paddingY="32px"
              bgColor="#F8FAFC"
              placeholder="Search Events"
              border="none"
              _hover={{
                border: 'none',
              }}
              _active={{
                border: 'none',
              }}
              _focus={{
                border: 'none',
              }}
              size="lg"
              // flexBasis={['auto', '60%']}
              onChange={(e) => setSearchState(e.target.value)}
            />
            <Stack
              alignItems="center"
              width="100%"
              direction={['column', 'row']}
              // flexBasis={['auto', '40%']}
            >
              <FitlerDropdown
                items={[2021, 2020]}
                initialValue="2021"
                onChange={setYearState}
              />
              <FitlerDropdown
                items={['All Societies', 'SB MUJ', 'CS MUJ', 'WIE MUJ']}
                initialValue="All Societies"
                onChange={setSocietyState}
              />
            </Stack>

          </Stack>
        </Box>
        <SectionContent>
          <PastEventsGrid
            eventsData={filteredData}
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
