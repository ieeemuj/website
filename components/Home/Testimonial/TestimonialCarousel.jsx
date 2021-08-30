import React from 'react';
import Carousel from 'react-elastic-carousel';
import TestimonialCard from '../Testimonial/TestimonialCard';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 480, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1080, itemsToShow: 1 },
];

const TestimonialCarousel = ({ testimonials }) => (
  <Carousel
    breakPoints={breakPoints}
    enableAutoPlay={true}
    paginationenableAutoPlay="true"
    autoPlaySpeed="5500"
    itemsToShow={1}
    enableMouseSwipe={false}
    pagination
  >
    {
        testimonials.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              rounded="2xl"
              bgColor="gray.500"
            />
          ))
    }
  </Carousel>
);

export default TestimonialCarousel;