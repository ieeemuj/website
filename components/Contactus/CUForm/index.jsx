import React from 'react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import HookForm from '../HookForm';

export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box py="32px">
        <HookForm />
      </Box>
    </ChakraProvider>
  );
}
