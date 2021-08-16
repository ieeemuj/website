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

const EventCard = ({
  slug, image, club, title, status,
}) => (
  <LinkBox>
    <FadeInUp>
      <Box
        boxShadow="md"
        margin="10px"
        rounded="lg"
        bg="white"
        width={320}
        minH={455}
      >
        {/* <Link passHref href={`/events/${title}`}> */}
        <VStack align="flex-start">
          <Image
            src={image}
            width="100%"
            height={290}
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
                <Heading size="md">{RichText.asText(title)}</Heading>
              </LinkOverlay>
            </NextLink>
          </VStack>
        </VStack>
      </Box>
    </FadeInUp>
  </LinkBox>
);

export default EventCard;
