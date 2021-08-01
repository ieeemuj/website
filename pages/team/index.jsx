import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import JoinUsBanner from '../../components/Layout/JoinUsBanner';
import Section from '../../components/Home/Section';
import SectionContent from '../../components/Home/Section/SectionContent';
import TeamsContent from '../../components/Teams/TeamsContent';
import TitleHeader from '../../components/Layout/TitleHeader';
import NavLink from '../../components/Layout/Navbar/NavLink';
import FadeInUp from '../../components/FadeInUp';

const AboutUs = () => {
  const faculty = [
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
  ];
  const ieeeSB = [
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
  ];
  const ieeeCS = [
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
  ];
  const ieeeWIE = [
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      facebook: '#',
    },

  ];
  return (
    <main>
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
            TEAMS
          </Heading>
          <Text
            fontSize="lg"
            color="white"
            textAlign="center"
            backgroundColor="brand.700"
            padding="8px"
            rounded="lg"
          >
            Looking for Website Team?
            <NavLink to="/credits">
              <span>WEBSITE CREDITS</span>
            </NavLink>
          </Text>
        </FadeInUp>
      </TitleHeader>
      <Section>
        <FadeInUp>
          <SectionContent>
            <TeamsContent faculty={faculty} ieeeCS={ieeeCS} ieeeSB={ieeeSB} ieeeWIE={ieeeWIE} />
          </SectionContent>
        </FadeInUp>
      </Section>
      <FadeInUp>
        <JoinUsBanner />
      </FadeInUp>
    </main>
  );
};

export default AboutUs;
