import { Box, Heading, VStack } from '@chakra-ui/react';

const StatBox = ({ numtext, subtext }) => (
  <Box
    rounded="lg"
    border="2px dashed"
    borderColor="gray.200"
    boxSizing="border-box"
  >
    <VStack
      justify="center"
      height="100%"
    >
      <Heading
        size="xl"
      >
        {numtext}
      </Heading>
      <Heading
        size="md"
      >
        {subtext}
      </Heading>
    </VStack>
  </Box>
);

export default StatBox;
