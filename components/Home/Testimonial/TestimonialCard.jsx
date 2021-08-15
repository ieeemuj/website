import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";

const TestimonialCard = ({ testimonial }) => (
  <Box
    as="section"
    bg={useColorModeValue("gray.50", "gray.800")}
    borderRadius="20px"
    boxShadow="xl"
  >
    <Box
      maxW="3xl"
      mx="auto"
      px={{
        base: "6",
        md: "8",
      }}
      pt="12"
      pb="16"
      // borderLeftRadius="20px"
    >
      <Flex direction="column" align="left" textAlign="center">
        <QuoteIcon
          color={useColorModeValue("gray.200", "gray.400")}
          fontSize={{
            base: "3xl",
            md: "6xl",
          }}
        />
        <Text
          fontSize={{
            base: "md",
            md: "lg",
          }}
          fontWeight="medium"
          mt="6"
        >
          &ldquo;{testimonial.testimonial_text}&rdquo;
        </Text>
        <Quotee
          name={testimonial.testimonial_author}
          jobTitle={testimonial.testimonial_author_title}
          imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          mt="8"
        />
      </Flex>
    </Box>
  </Box>
);

export default TestimonialCard;
