import React from "react";
import { Link, Box } from "@chakra-ui/layout";
import { ChevronUpIcon } from "@chakra-ui/icons";


export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link to="/#top">
      <Box
        position="fixed"
        bottom="20px"
        right={["16px", "84px", "84px", "84px", "120px"]}
        zIndex={2}
        onClick={scrollToTop}
      >
          <ChevronUpIcon w={10} h={10} color="#a3a3a3" />
      </Box>
    </Link>
  );
}