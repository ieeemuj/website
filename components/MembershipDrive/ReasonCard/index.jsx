import React from 'react';
import { Image, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
const testImg = "https://source.unsplash.com/100x100";

const ReasonCard = () => (
    <Box maxW="600px" rounded="md">
    <HStack spacing="2">
      <Box height="auto">
        <Image src={testImg} borderRadius="10px" width="100px" />
      </Box>

      <VStack spacing="2" align="left" p="20px">
        <Heading as="h3" size="md">
          Discover
        </Heading>
        <Text fontSize="xs">
          Discover IEEE activities throughout the world.
        </Text>
      </VStack>
    </HStack>
  </Box>
);

export default ReasonCard;