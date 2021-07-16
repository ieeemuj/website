import { Heading, VStack } from '@chakra-ui/react';

const AboutUsHeading = () => (
  <VStack
    width="100%"
    spacing="2"
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
  >
    <Heading>What is IEEE</Heading>
    <Heading
      textAlign={['center', 'center', 'center', 'center', 'left']}
      color="brand.500"
      size="sm"
    >
      Advancing technology for the benefit of humanity
    </Heading>
  </VStack>
);

export default AboutUsHeading;
