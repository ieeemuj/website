import Head from 'next/head';

// components
import { Button } from '@chakra-ui/react';

// styles
import styles from '../../styles/Home.module.css';

import TGroup from '../../components/Testimonials/testimonials';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>IEEE SB MUJ</title>
      <meta
        name="description"
        content="IEEE Student Branch Manipal Univeristy Jaipur"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to IEEE SB MUJ Website!</h1>
      <Button colorScheme="blue">Join</Button>
    </main>
      <TGroup />
  </div>
);

export default Home;
