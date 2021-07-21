import { SimpleGrid } from '@chakra-ui/react';
import EventCard from '../EventCard';

const PastEventsGrid = ({ allEventsData }) => (
  <SimpleGrid
    width="100%"
    columns={[1, 1, 2, 2, 3, 3]}
    spacing="16"
    justifyItems="center"
  >
    {allEventsData.map((event) => (
      <EventCard
        key={event.slug}
        image={event.image}
        club={event.club}
        title={event.title}
        status={event.status}
      />
    ))}
  </SimpleGrid>
);

export default PastEventsGrid;
