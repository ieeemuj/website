import { Heading, Text, VStack } from '@chakra-ui/react';

const AboutUsContentText = () => (
  <VStack
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
  >
    <Heading size="md">Our Vision</Heading>
    <Text
      textAlign={['center', 'center', 'center', 'center', 'left']}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, eget at nibh maecenas.
      Facilisis bibendum etiam nam accumsan ligula bibendum cursus.
      Viverra duis magna id a quis ultrices magna lectus.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, eget at nibh maecenas.
      Facilisis bibendum etiam nam accumsan ligula bibendum cursus.
      Viverra duis magna id a quis ultrices magna lectus.
    </Text>
  </VStack>
);

export default AboutUsContentText;
