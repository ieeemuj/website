import React from 'react';
import Carousel from 'react-elastic-carousel';
import TestimonialCard from './TestimonialCard';

const TestimonialCarousel = ({ testimonials }) => (
  <Carousel
    enableAutoPlay
    paginationenableAutoPlay="true"
    autoPlaySpeed={4000}
    itemsToShow={1}
    enableMouseSwipe={false}
    pagination
  >
    {
        testimonials.map((testimonial, i) => (
          <TestimonialCard
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            testimonial={testimonial}
            rounded="2xl"
            bgColor="gray.500"
          />
        ))
    }
  </Carousel>
);

export default TestimonialCarousel;
