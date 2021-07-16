import {
  VStack, Flex,
} from '@chakra-ui/react';
import AboutUsContent from './AboutUsContent';
import AboutUsHeading from './AboutUsHeading';

const AboutUs = () => (
  <Flex minH="400px">
    <VStack
      spacing="10"
      alignItems="flex-start"
      flexGrow="1"
    >
      <AboutUsHeading />
      <AboutUsContent />
    </VStack>
  </Flex>
);

export default AboutUs;
