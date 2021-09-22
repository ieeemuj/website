import React from 'react';
import {
  Box, Heading, Image, VStack, Divider, HStack, LinkBox, LinkOverlay,
} from '@chakra-ui/react';
// import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import NextLink from 'next/link';
import StatusBadge from './StatusBadge';
import OrganizedByBadge from './OrganizedByBadge';
import FadeInUp from '../FadeInUp';

const EventCardBase = ({
  slug, image, club, title, status,
}) => (
  <Box
    boxShadow="xl"
    rounded="lg"
    bg="white"
    width="100%"
    maxWidth={320}
    minH={455}
    marginY="32px"
    transition="transform 250ms"
    _hover={{
      transform: 'translate(0px, -5px)',
    }}
  >
    {/* <Link passHref href={`/events/${title}`}> */}
    <VStack align="flex-start">
      <Image
        src={image}
        alt={RichText.asText(title)}
        width="100%"
        height="100%"
        objectFit="cover"
        rounded="md"
        roundedBottom="none"
      />
      <VStack
        spacing="5"
        align="flex-start"
        padding="24px"
        paddingTop="16px"
        width="100%"
      >
        <HStack
          justifyContent="space-between"
          width="100%"
        >
          <OrganizedByBadge club={club} />
          <StatusBadge>{status}</StatusBadge>
        </HStack>
        <Divider />
        <NextLink
          href={`/events/${slug}`}
          passHref
        >
          <LinkOverlay>
            <Heading as="h3" size="md">{RichText.asText(title)}</Heading>
          </LinkOverlay>
        </NextLink>
      </VStack>
    </VStack>
  </Box>
);

const EventCard = ({
  slug, image, club, title, status, fade,
}) => (
  <LinkBox>
    {fade ? (
      <FadeInUp>
        <EventCardBase
          slug={slug}
          image={image}
          club={club}
          title={title}
          status={status}
        />
      </FadeInUp>
    ) : (
      <EventCardBase
        slug={slug}
        image={image}
        club={club}
        title={title}
        status={status}
      />
    )}
  </LinkBox>
);

export default EventCard;
