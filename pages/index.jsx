import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE SB MUJ</title>
        <meta name="description" content="IEEE Student Branch Manipal Univeristy Jaipur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to IEEE SB MUJ Website!
        </h1>
      </main>
    </div>
  );
}
