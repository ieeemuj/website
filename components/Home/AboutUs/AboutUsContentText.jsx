import { Heading, Text, VStack } from '@chakra-ui/react';

const AboutUsContentText = ({ heading, text }) => (
  <VStack
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
  >
    <Heading size="md">{heading}</Heading>
    <Text
      textAlign={['center', 'center', 'center', 'center', 'left']}
    >
      {text}
    </Text>
  </VStack>
);

export default AboutUsContentText;
