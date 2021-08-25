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
          textAlign="center"
        >
          <Heading
            size="md"
          >
            None at the moment.
            <br />
            Have a look at our past events!
          </Heading>
        </Flex>
      )}
  </CardCarousel>
);

export default ActiveEventsCarousel;
