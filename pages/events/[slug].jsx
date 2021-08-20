import { Box } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import { NextSeo } from 'next-seo';
import Section from '../../components/Home/Section';
import Event from '../../components/Events/EventPage';

import {
  getEventByUID, getAllSlugs,
} from '../../cms/queries/event';
import styles from '../../styles/EventDescription.module.css';
import FadeInUp from '../../components/FadeInUp';
import SectionContent from '../../components/Home/Section/SectionContent';
import getStatus from '../../utils';

const EventPage = ({ eventObj }) => (
  <>
    <NextSeo
      title={RichText.asText(eventObj.prismicTitle)}
      canonical={`https://ieeemuj.com/events/${eventObj.slug}`}
    />
    <Section>
      <FadeInUp>
        <SectionContent>
          <Event
            eventObj={eventObj}
          />
          <Box
            className={styles.description}
            marginTop="32px"
          >
            {RichText.render(eventObj.prismicDescription)}
          </Box>
        </SectionContent>
      </FadeInUp>
    </Section>
  </>
);

export async function getStaticProps({ params }) {
  const eventObj = (await getEventByUID(params.slug));

  const status = getStatus(eventObj.startISO, eventObj.endISO);

  if (status === 'ONGOING' || status === 'COMPLETED') delete eventObj.linkToRegistrationForm;

  if (eventObj) {
    return {
      props: {
        eventObj,
      },
    };
  }
  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const documents = await getAllSlugs();

  return {
    paths: documents.map((slug) => `/events/${slug}`),
    fallback: false,
  };
}

export default EventPage;
