import { Box, Heading, VStack } from '@chakra-ui/react';

const PlanBox = ({ cost, duration }) => (
  <Box
    rounded="lg"
    border="2px dashed"
    borderColor="gray.200"
    boxSizing="border-box"
    padding="48px"
    width="50%"
    height="100%"
  >
    <VStack
      justify="center"
      height="100%"
    >
      <Heading
        size="sm"
        textAlign="center"
      >
        Associate Membership
      </Heading>
      <Heading
        size="xl"
        textAlign="center"
      >
        ₹
        {' '}
        {cost}
      </Heading>
      <Heading
        size="md"
        textAlign="center"
      >
        {duration}
      </Heading>
    </VStack>
  </Box>
);

export default PlanBox;
