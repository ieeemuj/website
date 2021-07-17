import { VStack } from '@chakra-ui/react';

const SectionHeader = ({ children }) => (
  <VStack
    width="100%"
    spacing="2"
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
  >
    {children}
  </VStack>
);

export default SectionHeader;
