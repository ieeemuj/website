import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import CardCarousel from '../../components/Events/CardCarousel';
import EventMockData from '../../constants/EventMockData';
import EventCard from '../../components/Events/EventCard';

const Events = () => (
  <Box padding={[0, 2, 16, 16]}>
    <Container maxW={['container.sm', 'container.sm', 'container.xl', 'container.xl']}>
      <Heading as="h6" size="md" padding={4} textAlign="center">Upcoming Events</Heading>

      <CardCarousel>
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
      </CardCarousel>
    </Container>
  </Box>
);

export default Events;
