import {
  Box, Heading, Text, VStack,
} from '@chakra-ui/react';
import ResponsiveContainer from '../ResponsiveContainer';

const TitleHeader = () => (
  <Box
    width="100%"
    bgColor="brand.700"
    borderBottom="solid #0087ca"
  >
    <ResponsiveContainer>
      <VStack
        py="32px"
        spacing="5"
      >
        <Heading
          width="100%"
          size="lg"
          textAlign="center"
          color="white"
        >
          Events
        </Heading>
        <Text
          fontSize="md"
          color="white"
          textAlign="center"
        >
          “The only source of knowledge is experience.” – Albert Einstein
        </Text>
      </VStack>
    </ResponsiveContainer>
  </Box>
);

export default TitleHeader;
