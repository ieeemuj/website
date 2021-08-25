import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-elastic-carousel';

const Slideshow = ({ gallery }) => (
  <Carousel
    enableAutoPlay="true"
    autoPlaySpeed="4000"
    itemsToShow={1}
    itemsToScroll={1}
    enableMouseSwipe={false}
    pagination
  >
    {gallery.map((imageObj) => (
      <Box
        borderRadius="lg"
      >
        <Image
          src={imageObj.image.url}
          maxH="600px"
        />
      </Box>
    ))}
  </Carousel>
);

export default Slideshow;
