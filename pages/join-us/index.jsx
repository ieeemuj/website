import React from 'react';
import {
  SimpleGrid, Heading,
  Button, Box, Link, Text,
} from '@chakra-ui/react';

import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import SocietyCard from '../../components/MembershipDrive/SocietyCard';
import Slideshow from '../../components/MembershipDrive/Slideshow';
import Benefits from '../../components/MembershipDrive/Benefits';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';

const JoinUs = () => (
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
          MEMBERSHIP
        </Heading>
        <Text
          fontSize="lg"
          color="white"
          textAlign="center"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          We see the future of engineering in you.
        </Text>
      </FadeInUp>
    </TitleHeader>
    <ResponsiveContainer>
      <FadeInUp>
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
      </FadeInUp>
      <FadeInUp>
          <Benefits />
      </FadeInUp>
      <FadeInUp>
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
      </FadeInUp>
      <FadeInUp>
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
        </SimpleGrid>
      </FadeInUp>
      <FadeInUp>
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
      </FadeInUp>
      <FadeInUp>
        <SimpleGrid
          py="32px"
          columns={4}
          spacingX="80px"
          spacingY="90px"
          minChildWidth="150px"
        >
          <Slideshow />
        </SimpleGrid>
      </FadeInUp>
    </ResponsiveContainer>
  </main>
);

export default JoinUs;