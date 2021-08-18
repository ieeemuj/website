import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import Quotee from './Quotee';
import QuoteIcon from './QuoteIcon';

const TestimonialCard = ({ testimonial }) => (
  <Box
    as="section"
    bg="gray.50"
    borderRadius="lg"
    boxShadow="xl"
  >
    <Box
      maxW="3xl"
      height="100%"
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
      pt="12"
      pb="16"
    >
      <Flex
        direction="column"
        align="left"
        justify="space-between"
        height="100%"
        textAlign="center"
      >
        <QuoteIcon
          color="gray.200"
          fontSize={{
            base: '3xl',
            md: '6xl',
          }}
        />
        <Text
          fontSize={{
            base: 'md',
            md: 'lg',
          }}
          fontWeight="medium"
          mt="6"
        >
          {testimonial.testimonial_text}
        </Text>
        <Quotee
          name={testimonial.testimonial_author}
          jobTitle={testimonial.testimonial_author_title}
          imageSrc={testimonial.author_profile_pic.url}
          mt="8"
        />
      </Flex>
    </Box>
  </Box>
);

export default TestimonialCard;
