import { Box, SimpleGrid } from '@chakra-ui/react';

const StatPlaceholder = () => (
  <SimpleGrid
    columns="2"
    height={['300px', '360px', '400px', '400px', '400px', '440px']}
    width={['300px', '360px', '400px', '400px', '400px', '440px']}
    spacing="24px"
    paddingBottom="0%"
  >
    <Box rounded="lg" bgColor="gray.100" />
    <Box rounded="lg" bgColor="gray.100" />
    <Box rounded="lg" bgColor="gray.100" />
    <Box rounded="lg" bgColor="gray.100" />
  </SimpleGrid>
);

export default StatPlaceholder;
