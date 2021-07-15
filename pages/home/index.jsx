import Head from 'next/head';

// components
import { Container } from '@chakra-ui/react';

import TestimonialGroup from '../../components/Testimonial/TestimonialGroup';

const Home = () => (
  <Container maxW="container.xl">
    <Head>
      <title>IEEE SB MUJ</title>
      <meta
        name="description"
        content="IEEE Student Branch Manipal Univeristy Jaipur"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TestimonialGroup />
  </Container>
);

export default Home;
