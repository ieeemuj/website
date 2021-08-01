import React from 'react';
import {
  SimpleGrid, Heading,
  Button, Box, Link,
} from '@chakra-ui/react';

import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import SocietyCard from '../../components/MembershipDrive/SocietyCard';
import Slideshow from '../../components/MembershipDrive/Slideshow';
import Benefits from '../../components/MembershipDrive/Benefits';
import Plans from '../../components/MembershipDrive/plans';
import TitleHeader from '../../components/Layout/TitleHeader';

const JoinUs = () => (
  <main>
    <TitleHeader
      heading="Membership"
      subheading="We see the future of engineering in you."
    />
    <ResponsiveContainer>
      <SimpleGrid
        py="32px"
        columns={2}
        minChildWidth="180px"
      >
        <Heading
          as="h3"
          size="md"
        >
          Registration is now Open!
        </Heading>
        <Box>
          <Button
            as={Link}
            float="right"
            bgColor="brand.700"
            boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
            padding="16px"
            rounded="lg"
            color="white"
            _hover={{
              border: 'none',
              textDecoration: 'none',
            }}
            _active={{
              border: 'none',
              boxShadow: 'none',
              transform: 'scale(0.97)',
            }}
            _focus={{
              border: 'none',
              boxShadow: 'none',
              bg: 'brand',
            }}
          >
            REGISTER
          </Button>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        py="32px"
        columns={['1', '1', '1', '2', '2']}
        spacing="10"
      >
        <Plans />
        <Benefits />
      </SimpleGrid>
      <SimpleGrid
        py="32px"
        columns={1}
        spacing="10"
        minChildWidth="200px"
        marginTop="10"
      >
        <Heading
          as="h7"
          size="sm"
        >
          Each plan gets you membership for all Societies
        </Heading>
      </SimpleGrid>
      <SimpleGrid
        py="32px"
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
      <SimpleGrid
        py="32px"
        columns={2}
        spacingX="90px"
        minChildWidth="200px"
      >
        <Heading
          as="h7"
          size="sm"
        >
          Glimpse of what we do
        </Heading>
      </SimpleGrid>
      <SimpleGrid
        py="32px"
        columns={4}
        spacingX="80px"
        spacingY="90px"
        minChildWidth="150px"
      >
        <Slideshow />
      </SimpleGrid>
    </ResponsiveContainer>
  </main>
);

export default JoinUs;
