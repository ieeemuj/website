import { Box, Heading, VStack } from '@chakra-ui/react';
import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const StatBox = ({ numtext, subtext }) => {
  const counterRef = useRef();

  useEffect(() => {
    const node = counterRef.current;
    const num = parseInt(numtext, 10);

    const postFix = numtext.replace(num, '');

    const controls = animate(0, num, {
      duration: 2,
      onUpdate(val) {
        node.textContent = val.toFixed(0);
      },
      onComplete() {
        node.textContent += postFix;
      },
    });

    return () => controls.stop();
  });

  return (
    <Box
      rounded="lg"
      border="2px dashed"
      borderColor="gray.200"
      boxSizing="border-box"
    >
      <VStack
        justify="center"
        height="100%"
      >
        <Heading
          ref={counterRef}
          size="xl"
        >
          0
        </Heading>
        <Heading
          size="md"
        >
          {subtext}
        </Heading>
      </VStack>
    </Box>
  );
};

export default StatBox;
