import '../styles/globals.css';
import '../styles/carousel.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import Layout from '../components/Layout';

// theme
import theme from '../theme/theme';

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <DefaultSeo
      titleTemplate="IEEE SB MUJ | %s"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        site_name: 'IEEE SB MUJ',
      }}
      twitter={{
        handle: '@ieeemuj',
        cardType: 'summary_large_image',
      }}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
