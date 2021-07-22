import React from 'react';
import {
  SimpleGrid, Heading,
  Button, Box,
} from '@chakra-ui/react';

import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import SocietyCard from '../../components/MembershipDrive/SocietyCard';
import Slideshow from '../../components/MembershipDrive/Slideshow';
import Benefits from '../../components/MembershipDrive/Benefits';
import Plans from '../../components/MembershipDrive/plans';

const JoinUs = () => (
  <div>
    <ResponsiveContainer>
      <br />
      <br />
      <br />
      <SimpleGrid columns={2} minChildWidth="180px">
        <Heading as="h3" size="md">
          Registration is now Open!
        </Heading>
        <Box>
          <Button
            float="right"
            colorScheme="brand"
            rounded="lg"
            padding="16px"
          >
            REGISTER
          </Button>
        </Box>
      </SimpleGrid>

      <br />
      <br />

      <SimpleGrid columns={['1', '1', '1', '2', '2']} spacingX="90px">
        <Plans />
        <Benefits />
      </SimpleGrid>

      <br />
      <br />

      <SimpleGrid
        columns={1}
        spacingX="90px"
        minChildWidth="200px"
        marginTop="10"
      >
        <Heading as="h7" size="sm">
          Each plan gets you membership for all Societies
        </Heading>
      </SimpleGrid>
      <br />
      <br />
      <SimpleGrid
        columns={['1', '1', '1', '2', '2']}
        width="100%"
        justifyItems="center"
        spacingX="50px"
        spacingY="50px"
      >
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
      </SimpleGrid>
      <br />
      <br />
      <SimpleGrid columns={2} spacingX="90px" minChildWidth="200px">
        <Heading as="h7" size="sm">
          Glimpse of what we do
        </Heading>
      </SimpleGrid>
      <br />
      <br />
      <SimpleGrid
        columns={4}
        spacingX="80px"
        spacingY="90px"
        minChildWidth="150px"
      >
        <Slideshow />
      </SimpleGrid>
    </ResponsiveContainer>
    <br />
  </div>
);

export default JoinUs;
