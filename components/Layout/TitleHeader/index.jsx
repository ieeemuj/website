import {
  Box, Heading, Text, VStack,
} from '@chakra-ui/react';
import ResponsiveContainer from '../ResponsiveContainer';

const TitleHeader = ({ heading, subheading }) => (
  <Box
    width="100%"
    bgColor="brand.700"
    borderBottom="solid #0087ca"
  >
    <ResponsiveContainer>
      <VStack
        rounded="lg"
        py="32px"
        spacing="2"
      >
        <Heading
          size="lg"
          textAlign="center"
          color="white"
          backgroundColor="brand.700"
          padding="16px"
          rounded="lg"
        >
          { heading }
        </Heading>
        <Text
          fontSize="lg"
          color="white"
          textAlign="center"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          { subheading }
        </Text>
      </VStack>
    </ResponsiveContainer>
  </Box>
);

export default TitleHeader;
