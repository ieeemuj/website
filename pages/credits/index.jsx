import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import CreditsContent from '../../components/Credits/CreditsContent';
import CreditsHeader from '../../components/Credits/CreditsHeader';
import Section from '../../components/Home/Section';
import SectionContent from '../../components/Home/Section/SectionContent';
import SectionHeader from '../../components/Home/Section/SectionHeader';

const Credits = () => {
  const teamData = [
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
    {
      name: 'Lorem Ipsum',
      title: 'Error ab perspicitias',
      linkedIn: '#',
      insta: '#',
      github: '#',
    },
  ];
  return (
    <main>
      <Section>
        <SectionHeader>
          <CreditsHeader heading="Website Team" />
        </SectionHeader>
        <SectionContent>
          <SimpleGrid
            columns={['1', '1', '2', '2', '3']}
            height="100%"
            width="100%"
            gap="10"
            alignItems="center"
            wrap="wrap"
          >
            {teamData.map((teamMember) => (
              <CreditsContent
                key={teamMember.name}
                name={teamMember.name}
                title={teamMember.title}
                linkedIn={teamMember.linkedIn}
                insta={teamMember.insta}
                github={teamMember.github}
              />
            ))}
          </SimpleGrid>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <CreditsHeader heading="Tech Stack Used" subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
        </SectionHeader>
        <SectionContent>
          <Box paddingX={['2.4em', '6em', '6em', '7em', '8em']} marginBottom="10">
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magnam rerum nihil assumenda!
              Delectus numquam harum necessitatibus culpa non atque error.
              Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magnam rerum nihil assumenda!
              Delectus numquam harum necessitatibus culpa non atque error.
              Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magnam rerum nihil assumenda!
              Delectus numquam harum necessitatibus culpa non atque error.
              Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magnam rerum nihil assumenda!
              Delectus numquam harum necessitatibus culpa non atque error.
              Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magnam rerum nihil assumenda!
              Delectus numquam harum necessitatibus culpa non atque error.
              Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magnam rerum nihil assumenda!
              Delectus numquam harum necessitatibus culpa non atque error.
              Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
            </Text>
          </Box>
        </SectionContent>
      </Section>
    </main>
  );
};

export default Credits;
