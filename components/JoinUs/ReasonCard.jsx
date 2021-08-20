import React from 'react';
import {
  Box, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { RichText } from 'prismic-reactjs';

const ReasonCard = ({ reason }) => (
  <Box
    rounded=""
    width="100%"
    paddingTop="30px"
    borderTop="5px solid #f0f0f0"
  >
    <VStack
      spacing="5"
      paddingX="20px"
      paddingY="5px"
    >
      <HStack
        spacing="5"
        width="100%"
        alignItems="flex-start"
      >
        <Box
          margin="auto"
          flexShrink="0"
          flexGrow="0"
        >
          <AiFillStar />
        </Box>
        <Heading
          width="100%"
          as="h3"
          size="md"
        >
          {reason.title}
        </Heading>
      </HStack>
      <HStack>
        <Text
          fontSize="sm"
          color="grey"
          marginBottom="20px"
        >
          {RichText.render(reason.summary)}
        </Text>
      </HStack>
    </VStack>
  </Box>
);

export default ReasonCard;
