import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { VStack } from "@chakra-ui/react";
import { Box, Heading, Text } from "@chakra-ui/layout";

import { Item } from "react-photoswipe-gallery";

const GImage = () => (
  <Item
    original="https://placekitten.com/1024/768?image=2"
    thumbnail="https://placekitten.com/80/60?image=2"
    width="1024"
    height="768"
  >
    {({ ref, open }) => (
      <VStack>
        <img
          ref={ref}
          onClick={open}
          style={{ borderRadius: 10 + "px" }}
          src="https://placekitten.com/300/300?image=2"
        />
        <Box align="center">
          <Heading as="h3" p="10px" size="md">
            Image Caption
          </Heading>
          <Text fontSize="sm">Image caption goes here</Text>
        </Box>
      </VStack>
    )}
  </Item>
);

export default GImage;
