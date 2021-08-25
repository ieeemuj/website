import { Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import ReasonCard from './ReasonCard';

const Benefits = ({ reasons }) => (
  <VStack
    py="32px"
    alignItems="flex-start"
    spacing="5"
  >
    <Heading
      as="h1"
      size="lg"
    >
      Why IEEE?
    </Heading>
    <SimpleGrid
      columns={['1', '1', '1', '2', '3']}
      spacing="5"
    >
      {reasons.map((reason) => (
        <ReasonCard reason={reason} />
      ))}
    </SimpleGrid>
  </VStack>
);

export default Benefits;
