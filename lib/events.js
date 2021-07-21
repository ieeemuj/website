import * as allEvents from '../content/events';

export const getAllEvents = () => {
  const eventSlugs = Object.keys(allEvents);

  const eventList = [];

  eventSlugs.forEach((slug) => eventList.push(
    {
      slug,
      ...(allEvents[slug]),
    },
  ));

  return eventList;
};

export const getAllInactiveEvents = () => {
  const now = Date.now();

  return getAllEvents().filter((event) => {
    const end = (new Date(event.end_datetime)).getTime();

    if (now >= end) {
      return true;
    }

    return false;
  });
};

export const getAllActiveEvents = () => {
  const now = Date.now();
  return getAllEvents().filter((event) => {
    const end = (new Date(event.end_datetime)).getTime();
    if (now < end) {
      return true;
    }
    return false;
  }).map((event) => {
    const newEvent = event;
    const start = (new Date(event.start_datetime)).getTime();
    const end = (new Date(event.end_datetime)).getTime();

    if (now < start) newEvent.status = 'upcoming';
    else if (now < end) newEvent.status = 'ongoing';

    return newEvent;
  });
};

export const getEventBySlug = (slug) => ({ slug, ...(allEvents[slug]) });
