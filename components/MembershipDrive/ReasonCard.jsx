import React from "react";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const ReasonCard = () => (
  <Box
    maxW="600px"
    rounded=""
    width="100%"
    paddingTop="30px"
    borderTop="5px solid #f0f0f0"
  >
    <VStack spacing="2" align="" paddingX="20px" paddingY="5px">
      <HStack spacing="10" width="100%" alignItems="flex-start">
        <Box height="auto" flexShrink="0" flexGrow="0" float="left">
          <StarIcon />
        </Box>
        <Box height="auto" float="right">
          <Heading as="h3" size="md">
            IEEE Accelerator Program
          </Heading>
          <br />
        </Box>
      </HStack>
      <HStack>
        <Text fontSize="sm" color="grey" marginBottom="20px">
          Learn important industry-relevant skills from senior IEEE CS members.
          Curated tasks and projects to advance your programming skills! Build
          your career with your IEEE industry mentors!
        </Text>
      </HStack>
    </VStack>
  </Box>
);

export default ReasonCard;
