import {
  Avatar, Box, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';

const TestimonialCard = ({ testimonial }) => (
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
      height="100%"
      justify="space-between"
    >
      <Text
        textAlign="center"
        fontStyle="italic"
      >
        &ldquo;
        {testimonial.text}
        &rdquo;
      </Text>
      <HStack
        spacing="10"
      >
        <Avatar
          src={testimonial.authorImg}
        />
        <Heading
          size="sm"
        >
          {testimonial.author}
        </Heading>
      </HStack>
    </VStack>
  </Box>
);

export default TestimonialCard;
