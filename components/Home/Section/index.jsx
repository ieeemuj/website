import { Box, Flex, VStack } from '@chakra-ui/react';
import ResponsiveContainer from '../../Layout/ResponsiveContainer';

const Section = ({ bgColor, children }) => (
  <Box
    width="100%"
    bgColor={bgColor}
    paddingTop="32px"
    paddingBottom="32px"
  >
    <ResponsiveContainer>
      <Flex minH="400px" marginY="32px">
        <VStack
          spacing="10"
          alignItems="flex-start"
          flexGrow="1"
        >
          {children}
        </VStack>
      </Flex>
    </ResponsiveContainer>
  </Box>
);

export default Section;
