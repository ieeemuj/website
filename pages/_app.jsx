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
        description="IEEE Student Branch, Manipal University Jaipur is a group of driven individuals striving to create and spread awareness about various technologies that surround us."
        openGraph={{
          type: 'website',
          description: 'IEEE Student Branch, Manipal University Jaipur is a group of driven individuals striving to create and spread awareness about various technologies that surround us.',
          locale: 'en_US',
          site_name: 'IEEE SB MUJ',
          images: [
            {
              height: '320',
              width: '600',
              url: 'https://images.prismic.io/ieeemuj/ad253d2f-0adb-4c9e-bc58-768c431c7d7f_photo-1466611653911-95081537e5b7.jpeg?auto=compress,format&rect=0,70,1050,560&w=600&h=320',
              alt: 'Windmills in sunset landscape',
            },
          ],
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
