import React from "react";
import { Heading, VStack, Text } from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";
import { Box } from "@chakra-ui/react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 720, itemsToShow: 1 },
  { width: 1080, itemsToShow: 1 },
  { width: 1440, itemsToShow: 1 },
  { width: 1640, itemsToShow: 2 },
];

const WedoCard = () => {
  return (
    <>
      <VStack height="300px" p="50px">
        <Box align="center" marginBottom="30px">
          <Heading as="h1" size="lg">
            {"{EventName}"}
          </Heading>
        </Box>
        <Text>{"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "}</Text>
      </VStack>
    </>
  );
};

const Wedo = ({ data }) => {
  return (
    <VStack alignItems="flex-start" spacing="5">
      <Heading as="h1" size="lg">
        What we do at IEEE SB MUJ?
      </Heading>
      <VStack width="100%" spacing="5">
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
};

export default Wedo;
