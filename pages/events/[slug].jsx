import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import Section from '../../components/Home/Section';
import Event from '../../components/Events/EventPage';

import {
  getEventByUID, getAllSlugs,
} from '../../cms/queries/event';
import styles from '../../styles/EventDescription.module.css';

const EventPage = ({ eventObj }) => {
  const router = useRouter();
  return (
    <Section>
      <Event
        eventObj={eventObj}
        slug={router.query.slug}
      />
      <Box
        className={styles.description}
      >
        {RichText.render(eventObj.prismicDescription)}
      </Box>
    </Section>
  );
};

export async function getStaticProps({ params }) {
  const eventObj = (await getEventByUID(params.slug));

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
