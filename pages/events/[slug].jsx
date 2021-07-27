import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import { DateTime } from 'luxon';
import Section from '../../components/Home/Section';
import Event from '../../components/Events/EventPage';

import { getEventByUID, getAllSlugs } from '../../cms/queries/event';
import styles from '../../styles/EventDescription.module.css';

const EventPage = ({ event }) => {
  const startTime = DateTime.fromISO(event.start_time);
  const endTime = DateTime.fromISO(event.end_time);

  /**
   * Returns an object with:
   * - dateStr: string to use for dates
   * - timeStr: string to use for times
   * - status: 0 for completed, 1 for upcoming, 2 for ongoing
   */
  const getDateTimeStr = (start, end) => {
    const startDateTime = start.setZone('Asia/Kolkata');
    const endDateTime = end.setZone('Asia/Kolkata');

    const startDateStr = startDateTime.toFormat('MMM d, y');
    const endDateStr = endDateTime.toFormat('MMM d, y');

    let dateStr;

    if (startDateStr === endDateStr) dateStr = startDateStr;
    else dateStr = `${startDateStr} - ${endDateStr}`;

    const startTimeStr = startDateTime.toFormat('t');
    const endTimeStr = endDateTime.toFormat('t');
    const timeStr = `${startTimeStr} - ${endTimeStr}`;

    let status = 0;
    const now = DateTime.now();

    if (now.toMillis() < startDateTime.toMillis()) status = 1;
    else if (now.toMillis() < endDateTime.toMillis()) status = 2;

    return { dateStr, timeStr, status };
  };

  const eventObj = {
    title: event.title,
    img: event.cover_image,
    dateTime: getDateTimeStr(startTime, endTime),
    location: event.location,
    fee: event.fee,
    prize: event.prize,
    teamSize: event.team_size,
    link_to_registration_form: event.link_to_registration_form,
    description: event.description,
    slug: event._meta.uid,
    tags: event._meta.tags,
  };

  const router = useRouter();

  if (event) {
    return (
      <Section>
        <Event eventObj={eventObj} slug={router.query.slug} />

        {/* TODO: following event description will be markdown and needs to be redered. */}
        <Box className={styles.description}>{RichText.render(eventObj.description)}</Box>
      </Section>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {
  const event = await getEventByUID(params.slug);

  if (event) {
    return {
      props: {
        event,
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
