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
        titleTemplate="%s | IEEE SB MUJ"
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
              url: 'https://images.prismic.io/ieeemuj/54fc4fee-55f5-4550-a4d6-c4409430c2b7_promote-01.png?auto=compress,format&rect=0,145,1334,711&w=600&h=320',
              alt: 'IEEE SB MUJ',
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
