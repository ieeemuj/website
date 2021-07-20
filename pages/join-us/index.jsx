import React from "react";
import { SimpleGrid, Heading } from "@chakra-ui/layout";
import { Button, Image, Box, Text, VStack } from "@chakra-ui/react";
import ResponsiveContainer from "../../components/Layout/ResponsiveContainer";
import TextSection from "../../components/MembershipDrive/TextSection";
import SocietyCard from "../../components/MembershipDrive/SocietyCard";
import Slideshow from "../../components/MembershipDrive/Slideshow";

const JoinUs = () => (
  <div>
    <ResponsiveContainer>
      <br />
      <br />
      <br />
      <SimpleGrid columns={2} minChildWidth="180px">
        <Heading as="h3" size="md">
          IEEE MUJ Membership
        </Heading>
        <Box>
          <Button
            float="right"
            colorScheme="blue"
            variant="solid"
            width="125px"
          >
            Join Now
          </Button>
        </Box>
      </SimpleGrid>

      <br />
      <br />

      <SimpleGrid columns={["1", "1", "1", "2", "2"]} spacingX="90px">
        <VStack spacing={10}>
          <Heading as="h1" size="xl" p="2">
            Reason & Benefits of joining IEEE
          </Heading>
          <Text fontSize="xl">Catchy Tagline goes here !</Text>
        </VStack>
        <Box justifyItems="center">
          <TextSection />
        </Box>
      </SimpleGrid>

      <br />
      <br />

      <SimpleGrid
        columns={1}
        spacingX="90px"
        minChildWidth="200px"
        marginTop="10"
      >
        <Heading as="h7" size="xs">
          IEEE Global Membership
        </Heading>
      </SimpleGrid>
      <br />
      <br />
      <SimpleGrid
        columns={["1", "1", "1", "2", "2"]}
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
        <Heading as="h7" size="xs">
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
