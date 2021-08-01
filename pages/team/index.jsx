import React from 'react';
import { Text } from '@chakra-ui/react';
import JoinUsBanner from '../../components/Layout/JoinUsBanner';
import Section from '../../components/Home/Section';
import SectionContent from '../../components/Home/Section/SectionContent';
import TeamsContent from '../../components/Teams/TeamsContent';
import TitleHeader from '../../components/Layout/TitleHeader';
import NavLink from '../../components/Layout/Navbar/NavLink';

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
      <TitleHeader
        heading="Team"
        subheading={(
          <Text>
            Looking for Website Team?
            <NavLink to="/credits">
              <span>WEBSITE CREDITS</span>
            </NavLink>
          </Text>
        )}
      />
      <Section>
        <SectionContent>
          <TeamsContent faculty={faculty} ieeeCS={ieeeCS} ieeeSB={ieeeSB} ieeeWIE={ieeeWIE} />
        </SectionContent>
      </Section>
      <JoinUsBanner />
    </main>
  );
};

export default AboutUs;
