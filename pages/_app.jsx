import '../styles/globals.css';
import '../styles/carousel.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout';

// theme
import theme from '../theme/theme';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
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
};

export default MyApp;
