import React from 'react';
import {
  Heading, VStack, Text, Box,
} from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 720, itemsToShow: 1 },
  { width: 1080, itemsToShow: 1 },
  { width: 1440, itemsToShow: 1 },
  { width: 1640, itemsToShow: 2 },
];

const WedoCard = () => (
  <>
    <VStack
      height="300px"
      p="50px"
    >
      <Box
        align="center"
        marginBottom="30px"
      >
        <Heading
          as="h1"
          size="lg"
        >
          {'{EventName}'}
        </Heading>
      </Box>
      <Text>{'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}</Text>
    </VStack>
  </>
);

const Wedo = ({ data }) => (
  <VStack
    alignItems="flex-start"
    spacing="5"
  >
    <Heading
      as="h1"
      size="lg"
      width="100%"
      textAlign="center"
    >
      Join Societies.
    </Heading>
    <VStack
      width="100%"
      spacing="5"
    >
      <Carousel
        enableAutoPlay="true"
        autoPlaySpeed="4000"
        breakPoints={breakPoints}
        itemsToScroll={1}
        enableMouseSwipe={false}
        pagination
      >

        {/* {data.map(WedoCard)} */}

        <WedoCard data={data} />
        <WedoCard />
        <WedoCard />
        <WedoCard />
        <WedoCard />
      </Carousel>
    </VStack>
  </VStack>
);

export default Wedo;
