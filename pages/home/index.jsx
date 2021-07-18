import Head from 'next/head';

// components
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import AboutUsHeader from '../../components/Home/AboutUs/AboutUsHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import AboutUsContent from '../../components/Home/AboutUs/AboutUsContent';
import TestimonialHeader from '../../components/Home/Testimonial/TestimonialHeader';
import TestimonialContent from '../../components/Home/Testimonial/TestimonialContent';
import JoinUsBanner from '../../components/Layout/JoinUsBanner';

const Home = () => (
  <main>
    <Head>
      <title>IEEE SB MUJ</title>
      <meta
        name="description"
        content="IEEE Student Branch Manipal Univeristy Jaipur"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Section>
      <SectionHeader>
        <AboutUsHeader />
      </SectionHeader>
      <SectionContent>
        <AboutUsContent />
      </SectionContent>
    </Section>
    <Section>
      <SectionHeader>
        <TestimonialHeader />
      </SectionHeader>
      <SectionContent>
        <TestimonialContent />
      </SectionContent>
    </Section>
    <JoinUsBanner />
  </main>
);

export default Home;
