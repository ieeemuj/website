import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import EventCard from '../EventCard';

const PastEventsGrid = ({ eventsData }) => (

  <>
    {eventsData.length > 0 ? (
      <SimpleGrid
        width="100%"
        columns={[1, 1, 2, 2, 3, 3]}
        spacing="16"
        justifyItems="center"
      >
        {eventsData.map((eventObj) => (
          <EventCard
            key={eventObj.slug}
            slug={eventObj.slug}
            image={eventObj.coverImage.url}
            club={eventObj.club}
            title={eventObj.prismicTitle}
            status={eventObj.status}
            fade
          />
        ))}
      </SimpleGrid>
    ) : (
      <Box
        width="100%"
        textAlign="center"
      >
        <Heading
          width="100%"
          size="lg"
        >
          No past events found!
        </Heading>
      </Box>
    )}

  </>
);

export default PastEventsGrid;
