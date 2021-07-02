import '../styles/globals.css';
import { ChakraProvider, ThemeProvider, CSSReset } from '@chakra-ui/react';
import Layout from '../components/Layout';

// theme
import theme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <CSSReset />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
