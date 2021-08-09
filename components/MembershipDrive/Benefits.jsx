import { Heading, VStack } from '@chakra-ui/react';
import ReasonCard from './ReasonCard';

const Benefits = ({ data }) => (
  <VStack
    alignItems="center"
    spacing="5"
  >
    <Heading
      as="h1"
      size="lg"
      width="100%"
      textAlign={['center', 'center', 'center', 'center', 'left']}
    >
      {data.title}
    </Heading>
    <VStack
      width="100%"
      spacing="10"
    >
      {data.reasons.map((reason) => (
        <ReasonCard reason={reason} />
      ))}
    </VStack>
  </VStack>
);

export default Benefits;
