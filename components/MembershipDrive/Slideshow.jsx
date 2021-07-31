import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-elastic-carousel';

const testImg = 'https://source.unsplash.com/250x250';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
  { width: 1440, itemsToShow: 4 },
  { width: 1640, itemsToShow: 5 },
];

const Slideshow = () => (
  <Carousel
    enableAutoPlay="true"
    autoPlaySpeed="4000"
    breakPoints={breakPoints}
    itemsToScroll={1}
    enableMouseSwipe={false}
    pagination
  >
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
    <Box borderRadius="10px">
      <Image rounded="lg" src={testImg} />
    </Box>
  </Carousel>
);

export default Slideshow;
