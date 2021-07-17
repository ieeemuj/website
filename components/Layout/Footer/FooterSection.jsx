import { VStack } from '@chakra-ui/react';

const FooterSection = ({ children }) => (
  <VStack
    width="100%"
    alignItems="flex-start"
  >
    {children}
  </VStack>
);

export default FooterSection;
