import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import {
  Heading,
  Text,
  Box,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
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
import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';

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
        <Box width="100%" bgColor="white" paddingTop="16px" paddingBottom="16px">
          <ResponsiveContainer>
            <Flex minH="70px" marginY="32px">
              <Stack spacing="10" alignItems="center" flexGrow="1" direction={['column', 'row']}>
                <InputGroup backgroundColor="gray.50">
                  <InputLeftElement
                    pointerEvents="none"
                  >
                    <SearchIcon marginTop="5px" marginLeft="5px" boxSize="20px" color="gray.300" />
                  </InputLeftElement>
                  <Input type="text" placeholder="Search Events" size="lg" />
                </InputGroup>

                <Menu>
                  <MenuButton width="150px" as={Button} size="lg" backgroundColor="#003366" color="#fff" _hover={{ bg: '#003366' }} _expanded={{ bg: '#003366' }} _focus={{ boxShadow: 'outline' }}>
                    Year
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>2021</MenuItem>
                    <MenuItem>2020</MenuItem>
                    <MenuItem>2019</MenuItem>
                    <MenuItem>2018</MenuItem>
                  </MenuList>

                </Menu>
                <Menu>
                  <MenuButton width="150px" as={Button} size="lg" backgroundColor="#003366" color="#fff" paddingRight="35px" _hover={{ bg: '#003366' }} _expanded={{ bg: '#003366' }} _focus={{ boxShadow: 'outline' }}>
                    Society
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>IEEE SB MUJ</MenuItem>
                    <MenuItem>IEEE CS MUJ</MenuItem>
                    <MenuItem>IEEE WIE MUJ</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </ResponsiveContainer>
        </Box>
        {/* <Section> */}
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
