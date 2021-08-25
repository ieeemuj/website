import {
  Box, Button, Heading, Image, Link, Stack, VStack,
} from '@chakra-ui/react';

import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import { linkResolver } from '../../../cms/config';
import getStatus from '../../../utils';

import EventDetailsGrid from './EventDetailsGrid';

const Event = ({ eventObj }) => {
  const status = getStatus(eventObj.startISO, eventObj.endISO);
  const disabled = status === 'COMPLETED' || status === 'ONGOING';

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
          src={eventObj.coverImage.url}
          objectFit="cover"
          borderRadius="lg"
        />
      </Box>
      <VStack
        alignItems={['center', 'center', 'center', 'center', 'flex-start', 'flex-start']}
        spacing="5"
        width={['100%', '100%', '100%', '100%', '55%']}
        height="100%"
        justify="space-between"
      >
        <Heading
          pt={2}
          size="lg"
          textAlign="center"
        >
          {RichText.asText(eventObj.prismicTitle)}
        </Heading>
        <EventDetailsGrid eventObj={eventObj} />
        <Button
          as={Link}
          href={disabled ? null : PrismicLink.url(eventObj.linkToRegistrationForm, linkResolver)}
          target="_blank"
          bgColor="brand.700"
          boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
          padding="16px"
          width="100%"
          maxWidth="360px"
          rounded="md"
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
