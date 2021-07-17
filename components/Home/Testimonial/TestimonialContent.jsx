import { Box, SimpleGrid } from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

const TestimonialContent = () => (
  <Box width="100%">
    <SimpleGrid
      columns={['1', '1', '1', '1', '2']}
      width="100%"
      spacing="48px"
      paddingBottom="0%"
    >
      <TestimonialCard rounded="lg" bgColor="gray.100" />
      <TestimonialCard rounded="lg" bgColor="gray.100" />
      <TestimonialCard rounded="lg" bgColor="gray.100" />
      <TestimonialCard rounded="lg" bgColor="gray.100" />
    </SimpleGrid>
  </Box>
);

export default TestimonialContent;
