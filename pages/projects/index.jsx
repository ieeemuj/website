import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';

const Projects = () => (
  <div>
    <Head>
      <title>IEEE SB MUJ | Projects</title>
      <meta
        name="description"
        content="IEEE Student Branch Manipal Univeristy Jaipur"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Header title="Projects" subtitle="A glimpse of what IEEE members can build" />
      Projects
    </main>
  </div>
);

export default Projects;
