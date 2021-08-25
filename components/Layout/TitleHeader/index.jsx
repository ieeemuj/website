import {
  Box, VStack,
} from '@chakra-ui/react';
import ResponsiveContainer from '../ResponsiveContainer';

const TitleHeader = ({ children }) => (
  <Box
    width="100%"
    bgColor="brand.700"
    borderBottom="solid #0087ca"
  >
    <ResponsiveContainer>
      <VStack
        rounded="lg"
        pt="32px"
        pb="56px"
        spacing="2"
      >
        {children}
      </VStack>
    </ResponsiveContainer>
  </Box>
);

export default TitleHeader;
