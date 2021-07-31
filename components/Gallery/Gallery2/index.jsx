import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { SimpleGrid } from "@chakra-ui/react";
import { Gallery } from "react-photoswipe-gallery";
import GImage from "../GImage";

const Gallery2 = () => (
  <Gallery>
    <SimpleGrid
      columns={["1", "1", "2", "3", "4"]}
      spacingX="60px"
      spacingY="60px"
    >
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
      <GImage />
    </SimpleGrid>
  </Gallery>
);

export default Gallery2;
