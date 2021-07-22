import {
  Box, Button, Heading, Image, Link, Stack, VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import EventDetailsGrid from './EventDetailsGrid';

const Event = ({ slug }) => (
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
      <NextLink
        href={`${slug}/register`}
        passHref
      >
        <Button
          as={Link}
          colorScheme="brand"
          width="100%"
          maxW="360px"
          padding="16px"
          rounded="lg"
          _hover={{
            textDecoration: 'none',
            bgColor: 'brand.600',
          }}
        >
          REGISTER
        </Button>
      </NextLink>

    </VStack>
  </Stack>

);
export default Event;
