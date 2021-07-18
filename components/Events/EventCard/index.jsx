import React from 'react';
import {
  Box, Heading, Image, VStack, Divider, HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import Badge from '../Badge';
import OrganizedBy from '../OrganizedBy';

const EventCard = ({
  img, category, title, status,
}) => (
  <Box boxShadow="lg" margin="10px" rounded="md" bg="white" width={290} minH={450}>
    {/* <Link passHref href={`/events/${title}`}> */}
    <VStack align="flex-start">
      <Image
        src={img}
        width="100%"
        height={290}
        objectFit="cover"
        rounded="md"
        roundedBottom="none"
      />
      <VStack spacing="5" align="flex-start" padding="24px" paddingTop="16px" width="100%">
        <HStack justifyContent="space-between" width="100%">
          <OrganizedBy by={category} />
          <Badge>{status}</Badge>
        </HStack>
        <Divider />
        <Heading size="md">{title}</Heading>

      </VStack>
    </VStack>
    {/* </Link> */}
  </Box>
);

export default EventCard;
