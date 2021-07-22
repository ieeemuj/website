import React from 'react';
import {
  Image, Box, Heading, Stack, Text, VStack,
} from '@chakra-ui/react';

const testImg = 'https://source.unsplash.com/150x150';

const SocietyCard = () => (
  <Box maxW="600px" rounded="md">
    <Stack direction={['column', 'row']} spacing="2">
      <Box height="auto">
        <Image src={testImg} borderRadius="10px" width="500px" />
      </Box>

      <VStack spacing="2" align="left" p="10px">
        <Heading as="h3" size="sm">
          IEEE Woman in Engineering
        </Heading>
        <Text fontSize="xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          sapien ornare lacus imperdiet efficitur posuere vel justo. Proin
          fringilla pellentesque neque, nec venenatis metus.
        </Text>
        <Text>IEEE WIE [INSTA]</Text>
      </VStack>
    </Stack>
  </Box>
);
export default SocietyCard;
