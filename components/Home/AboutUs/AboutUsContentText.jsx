import { Heading, Text, VStack } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';

const AboutUsContentText = ({ heading, text }) => (
  <VStack
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
  >
    <Heading size="md">{heading}</Heading>
    <Text
      textAlign={['center', 'center', 'center', 'center', 'left']}
    >
      {RichText.render(text)}
    </Text>
  </VStack>
);

export default AboutUsContentText;
