import React from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
  { width: 1440, itemsToShow: 4 },
  { width: 1640, itemsToShow: 5 },
];

const CardCarousel = ({ children }) => (
  <Carousel
    breakPoints={breakPoints}
    itemsToScroll={1}
    enableMouseSwipe={false}
    pagination
  >
    {children}
  </Carousel>
);

export default CardCarousel;
