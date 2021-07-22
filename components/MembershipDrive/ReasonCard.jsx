import React from 'react';
import {
  Image, Box, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';

const testImg = 'https://source.unsplash.com/100x100';

const ReasonCard = () => (
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
          width="100px"
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
          Discover
        </Heading>
        <Text
          fontSize="sm"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras sed sapien ornare lacus imperdiet efficitur posuere vel justo.
          Proin fringilla pellentesque neque, nec venenatis metus.
        </Text>
      </VStack>
    </HStack>
  </Box>
);

export default ReasonCard;
