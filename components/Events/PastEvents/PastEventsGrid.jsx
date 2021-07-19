import { SimpleGrid } from '@chakra-ui/react';
import EventMockData from '../../../constants/EventMockData';
import EventCard from '../EventCard';

const PastEventsGrid = () => (
  <SimpleGrid
    width="100%"
    columns={['3']}
    spacing="16"
    justifyItems="center"
  >
    {EventMockData.map((val) => (
      <EventCard
        key={val.key}
        img={val.img}
        category={val.category}
        title={val.title}
        status={val.status}
        more={val.more}
      />
    ))}
  </SimpleGrid>
);

export default PastEventsGrid;
