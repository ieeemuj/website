import { Heading, VStack } from '@chakra-ui/react';
import ReasonCard from './ReasonCard';

const Benefits = () => (
  <VStack
    alignItems="flex-start"
    spacing="5"
  >
    <Heading
      as="h1"
      size="lg"
    >
      Why IEE?
    </Heading>
    <VStack
      width="100%"
      spacing="5"
    >
      <ReasonCard />
      <ReasonCard />
      <ReasonCard />
    </VStack>
  </VStack>
);

export default Benefits;
