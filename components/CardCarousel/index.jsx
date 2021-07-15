import React from 'react';
import Carousel from 'react-elastic-carousel';
// import styles from "../../styles/Carousel.module.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const CardCarousel = ({ children }) => (
  <Carousel breakPoints={breakPoints}>
    {children}
  </Carousel>
);

export default CardCarousel;
