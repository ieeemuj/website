import React from 'react';
import {
  Box, Heading, Image, VStack, Divider, HStack,
} from '@chakra-ui/react';
// import Link from 'next/link';
import StatusBadge from './StatusBadge';
import OrganizedByBadge from './OrganizedByBadge';

const EventCard = ({
  image, club, title, status,
}) => (
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
        <Heading size="md">{title}</Heading>

      </VStack>
    </VStack>
    {/* </Link> */}
  </Box>
);

export default EventCard;
