import {
  Avatar, Box, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';

const TestimonialCard = () => (
  <Box
    maxW="600px"
    rounded="lg"
    border="2px dashed"
    borderColor="gray.200"
    boxSizing="border-box"
    padding="48px"
  >
    <VStack
      spacing="10"
    >
      <Text
        textAlign="center"
        fontStyle="italic"
      >
        &ldquo;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pharetra purus sed viverra amet vulputate.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pharetra purus sed viverra amet vulputate.
        &rdquo;
      </Text>
      <HStack
        spacing="10"
      >
        <Avatar
          src="https://i.pravatar.cc/300"
        />
        <Heading
          size="sm"
        >
          Manavendra Sen
        </Heading>
      </HStack>
    </VStack>
  </Box>
);

export default TestimonialCard;
