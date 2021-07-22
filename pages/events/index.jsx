import React, { useEffect, useState } from 'react';
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import ActiveEventsHeader from '../../components/Events/ActiveEvents/ActiveEventsHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import PastEventsHeader from '../../components/Events/PastEvents/PastEventsHeader';
import PastEventsGrid from '../../components/Events/PastEvents/PastEventsGrid';

import ActiveEventsCarousel from '../../components/Events/ActiveEvents/ActiveEventsCarousel';
import { getAllActiveEvents, getAllInactiveEvents } from '../../lib/events';

const Events = () => {
  const [activeEventsData, setActiveEventsData] = useState([]);
  const [allEventsData, setAllEventsData] = useState([]);

  useEffect(() => {
    const activeEvents = getAllActiveEvents();
    const allEvents = getAllInactiveEvents();

    setActiveEventsData(activeEvents);
    setAllEventsData(allEvents);
  }, []);

  return (
    <main>
      <Section
        bgColor="whitesmoke"
      >
        <SectionHeader>
          <ActiveEventsHeader />
        </SectionHeader>
        <SectionContent>
          <ActiveEventsCarousel
            activeEventsData={activeEventsData}
          />
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <PastEventsHeader />
        </SectionHeader>
        <SectionContent>
          <PastEventsGrid
            allEventsData={allEventsData}
          />
        </SectionContent>
      </Section>
    </main>
  );
};

export default Events;
