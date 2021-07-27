import { SimpleGrid } from '@chakra-ui/react';
import EventCard from '../EventCard';

const PastEventsGrid = ({ allEventsData }) => (
  <SimpleGrid
    width="100%"
    columns={[1, 1, 2, 2, 3, 3]}
    spacing="16"
    justifyItems="center"
  >
    {allEventsData.map((eventObj) => (
      <EventCard
        key={eventObj.slug}
        slug={eventObj.slug}
        image={eventObj.coverImage.url}
        club={eventObj.club}
        title={eventObj.prismicTitle}
        status={eventObj.status}
      />
    ))}
  </SimpleGrid>
);

export default PastEventsGrid;
