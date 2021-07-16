import '../styles/globals.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Layout from '../components/Layout';

// theme
import theme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
