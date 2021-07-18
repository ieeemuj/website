import React from 'react';
import CardCarousel from '../../components/Events/CardCarousel';
import EventMockData from '../../constants/EventMockData';
import EventCard from '../../components/Events/EventCard';

const Events = () => (
  <div>
    <h1>Upcoming Events</h1>
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
  </div>
);

export default Events;
