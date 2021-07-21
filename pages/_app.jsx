import '../styles/globals.css';
import '../styles/carousel.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

// theme
import theme from '../theme/theme';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const adminPath = router.asPath.includes('/admin');
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {!adminPath
        ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )
        : <Component {...pageProps} />}

    </ChakraProvider>
  );
};

export default MyApp;
