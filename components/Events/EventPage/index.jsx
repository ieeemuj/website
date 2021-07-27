import {
  Box, Button, Heading, Image, Link, Stack, VStack,
} from '@chakra-ui/react';

import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import { linkResolver } from '../../../cms/config';

import EventDetailsGrid from './EventDetailsGrid';

const Event = ({ eventObj }) => {
  const disabled = eventObj.dateTime.status === 0;

  return (
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
          src={eventObj.img.url}
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
          {RichText.asText(eventObj.title)}
        </Heading>
        <EventDetailsGrid eventObj={eventObj} />
        <Button
          as={Link}
          href={disabled ? null : PrismicLink.url(eventObj.link_to_registration_form, linkResolver)}
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
          disabled={disabled}
        >
          {disabled ? 'REGISTRATION CLOSED' : 'REGISTER'}
        </Button>

      </VStack>
    </Stack>

  );
};
export default Event;
