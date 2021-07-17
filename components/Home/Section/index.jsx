import { Flex, VStack } from '@chakra-ui/react';
import ResponsiveContainer from '../../Layout/ResponsiveContainer';

const Section = ({ children }) => (
  <ResponsiveContainer>
    <Flex minH="400px" marginY="96px">
      <VStack
        spacing="10"
        alignItems="flex-start"
        flexGrow="1"
      >
        {children}
      </VStack>
    </Flex>
  </ResponsiveContainer>
);

export default Section;
