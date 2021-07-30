import {
  Box, Heading, Text, VStack,
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
        {testimonial.testimonial_text}
        &rdquo;
      </Text>
      <VStack>
        <Heading
          size="sm"
        >
          {testimonial.testimonial_author}
        </Heading>
        <Heading
          size="xs"
        >
          {testimonial.testimonial_author_title}
        </Heading>
      </VStack>
    </VStack>
  </Box>
);

export default TestimonialCard;
