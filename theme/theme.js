import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      700: '#002855',
      400: '#034188',
      500: '#034188',
      100: '#F4F9FF',
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});
export default theme;
