import { Flex, Heading } from '@chakra-ui/react';
import CardCarousel from '../CardCaraousel';
import EventCard from '../EventCard';

const ActiveEventsCarousel = ({ activeEventsData }) => (
  <CardCarousel>
    {activeEventsData.length > 0 ? activeEventsData.map((event) => (
      <EventCard
        key={event.slug}
        image={event.image}
        club={event.club}
        title={event.title}
        status={event.status}
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
