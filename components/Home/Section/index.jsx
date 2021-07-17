import { Flex, VStack } from '@chakra-ui/react';

const Section = ({ children }) => (
  <Flex minH="400px">
    <VStack
      spacing="10"
      alignItems="flex-start"
      flexGrow="1"
    >
      {children}
    </VStack>
  </Flex>
);

export default Section;
