import {
  Box, Button, Heading, Image, Link, Stack, VStack,
} from '@chakra-ui/react';

import EventDetailsGrid from './EventDetailsGrid';

const Event = () => (
  <Stack
    direction={['column', 'column', 'column', 'column', 'row']}
    alignItems="center"
    width="100%"
    spacing="10"
    justify={['center', 'center', 'center', 'center', 'flex-start']}
  >
    <Box
      height="250px"
      width="250px"
      rounded="lg"
      flexShrink="0"
      flexGrow="0"
    >
      <Image
        src="https://source.unsplash.com/250x250"
        objectFit="cover"
        borderRadius="lg"
      />
    </Box>
    <VStack
      alignItems={['center', 'center', 'center', 'center', 'flex-start', 'flex-start']}
      spacing="5"
      width={['100%', '100%', '100%', '100%', '55%']}
      height="100%"
      justify="space-around"
    >
      <Heading
        size="lg"
        textAlign="center"
      >
        Worshop on Computer Vision

      </Heading>
      <EventDetailsGrid />
      <Button
        as={Link}
        bgColor="brand.700"
        boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
        padding="16px"
        width="100%"
        maxWidth="360px"
        rounded="lg"
        color="white"
        _hover={{
          border: 'none',
          textDecoration: 'none',
        }}
        _active={{
          border: 'none',
          boxShadow: 'none',
          transform: 'scale(0.97)',
        }}
        _focus={{
          border: 'none',
          boxShadow: 'none',
          bg: 'brand',
        }}
      >
        JOIN NOW
      </Button>

    </VStack>
  </Stack>

);
export default Event;
