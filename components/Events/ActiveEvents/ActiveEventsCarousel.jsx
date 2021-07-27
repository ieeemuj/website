import { Flex, Heading } from '@chakra-ui/react';
import CardCarousel from '../CardCaraousel';
import EventCard from '../EventCard';

const ActiveEventsCarousel = ({ activeEventsData }) => (
  <CardCarousel>
    {activeEventsData.length > 0 ? activeEventsData.map((eventObj) => (
      <EventCard
        key={eventObj.slug}
        slug={eventObj.slug}
        image={eventObj.coverImage.url}
        club={eventObj.club}
        title={eventObj.prismicTitle}
        status={eventObj.status}
      />
    ))
      : (
        <Flex
          width="320px"
          height="455px"
          justify="center"
          alignItems="center"
        >
          <Heading
            size="md"
          >
            Come back later!
          </Heading>
        </Flex>
      )}
  </CardCarousel>
);

export default ActiveEventsCarousel;
