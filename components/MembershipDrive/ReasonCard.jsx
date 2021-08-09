import React from 'react';
import {
  Image, Box, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';

const testImg = 'https://source.unsplash.com/100x100';

const ReasonCard = ({ reason }) => (
  <Box
    maxW="600px"
    rounded="md"
    width="100%"
  >
    <HStack
      spacing="2"
      width="100%"
      alignItems="flex-start"
    >
      <Box
        height="auto"
        flexShrink="0"
        flexGrow="0"
      >
        <Image
          src={testImg}
          rounded="lg"
          width="72px"
        />
      </Box>

      <VStack
        spacing="2"
        align="left"
        paddingX="20px"
      >
        <Heading
          as="h3"
          size="md"
        >
          {reason.heading}
        </Heading>
        <Text
          fontSize="sm"
        >
          {reason.text}
        </Text>
      </VStack>
    </HStack>
  </Box>
);

export default ReasonCard;
