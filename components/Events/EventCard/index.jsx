import React from 'react';
import {
  Box, Heading, Image, VStack, Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import Badge from '../Badge';
import OrganizedBy from '../OrganizedBy';

const EventCard = ({
  img, category, title, desc,
}) => (
  <Box
    boxShadow="lg"
    margin="10px"
    rounded="lg"
    bg="white"
    width="320px"
  >
    <VStack align="flex-start">
      <Badge>
        Upcoming
      </Badge>
      <Image
        src={img}
        width="100%"
        height="160px"
        objectFit="cover"
        rounded="lg"
        roundedBottom="none"
      />
      <Box
        padding="25px"
      >
        <VStack spacing="5" align="flex-start">
          <OrganizedBy by={category} />
          <Heading
            height="72px"
            size="lg"
            noOfLines={2}
          >
            {title}
          </Heading>
          <Text
            height="60px"
            noOfLines={2}
          >
            {desc}
          </Text>
          <Link passHref href={`/events/${title}`}>
            <Text
              fontWeight="bold"
              color="blue.600"
            >
              KNOW MORE
            </Text>
          </Link>
        </VStack>
      </Box>
    </VStack>

  </Box>
);

export default EventCard;
