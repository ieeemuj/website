import { Box, Heading, VStack } from '@chakra-ui/react';

const GlobalPlanBox = ({ cost, duration }) => (
  <Box
    rounded="lg"
    border="2px dashed"
    borderColor="gray.200"
    boxSizing="border-box"
    padding="16px"
    width="100%"
  >
    <VStack
      justify="center"
      height="100%"
    >
      <Heading
        size="sm"
        textAlign="center"
      >
        Global Membership
      </Heading>
      <Heading
        size="md"
        textAlign="center"
      >
        US$
        {' '}
        {cost}
      </Heading>
      <Heading
        size="sm"
        textAlign="center"
      >
        {duration}
      </Heading>
    </VStack>
  </Box>
);

export default GlobalPlanBox;
