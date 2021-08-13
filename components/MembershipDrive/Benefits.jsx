import { Heading, VStack } from "@chakra-ui/react";
import ReasonCard from "./ReasonCard";
import { SimpleGrid } from "@chakra-ui/layout";

const Benefits = () => (
  <VStack alignItems="flex-start" spacing="5">
    <br />
    <Heading as="h1" size="lg">
      Why IEEE?
    </Heading>
    <br />
    <br />
    <SimpleGrid columns={["1", "1", "1", "2", "3"]} spacing="25">
      <ReasonCard />
      <ReasonCard />
      <ReasonCard />
      <ReasonCard />
      <ReasonCard />
      <ReasonCard />
    </SimpleGrid>
    <br />
  </VStack>
);

export default Benefits;
