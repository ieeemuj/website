import { SimpleGrid, Heading } from "@chakra-ui/react";
import ResponsiveContainer from "../../components/Layout/ResponsiveContainer";
import Gallery2 from "../../components/Gallery/Gallery2";
import Slideshow from "../../components/MembershipDrive/Slideshow";

const JoinUs = () => (
  <div>
    <ResponsiveContainer>
      <br />
      <br />
      <br />
      <SimpleGrid columns={2} minChildWidth="180px">
        <Heading as="h3" size="xl">
          Glimpse of what we do
        </Heading>
      </SimpleGrid>
      <br />
      <br />
      <SimpleGrid columns={2} spacingX="90px" minChildWidth="200px">
        <Heading as="h7" size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

      <br />
      <br />

      <SimpleGrid
        columns={1}
        spacingX="90px"
        minChildWidth="200px"
        marginTop="10"
      >
        <Heading as="h7" size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
      </SimpleGrid>
      <br />
      <br />
      <SimpleGrid
        width="100%"
        justifyItems="center"
        spacingX="50px"
        spacingY="50px"
      >
        <Gallery2 />
      </SimpleGrid>
      <br />
      <br />
      <br />
      <br />
      <SimpleGrid columns={2} spacingX="90px" minChildWidth="200px">
        <Heading as="h7" size="sm">
          Seminars , Workshops , Conferences and Events
        </Heading>
      </SimpleGrid>
      <br />
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
