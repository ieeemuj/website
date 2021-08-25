import React from 'react';
import {
  Image, Box, Heading, Stack, Text, VStack,
} from '@chakra-ui/react';

const SocietyCard = ({ society }) => (
  <Box
    maxW="600px"
    rounded="md"
  >
    <Stack
      direction={['column', 'row']}
      spacing="10"
    >
      <Box
        height="auto"
      >
        <Image
          src={society.logo}
          rounded="lg"
          width="250px"
          margin="auto"
        />
      </Box>

      <VStack
        spacing="2"
        align="left"
        px="8px"
      >
        <Heading
          as="h3"
          size="md"
        >
          {society.name}
        </Heading>
        <Text
          fontSize="sm"
        >
          {society.summary}
        </Text>
      </VStack>
    </Stack>
  </Box>
);
export default SocietyCard;
