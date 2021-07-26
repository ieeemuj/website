import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      700: '#00132B',
      600: '#002855',
      500: '#034188',
      400: '#0087ca',
      100: '#F4F9FF',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'DM Sans',
  },
});
export default theme;
