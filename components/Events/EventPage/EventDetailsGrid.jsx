import {
  HStack, Icon, SimpleGrid, Text,
} from '@chakra-ui/react';
import {
  BiCalendar, BiCurrentLocation, BiMedal, BiRupee,
} from 'react-icons/bi';
import { BsPersonPlus } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa';

const EventDetailsGrid = ({ eventObj }) => (
  <SimpleGrid
    py={3}
    mx="auto"
    columns={['1', '1', '2', '2', '2']}
    width={['max-content', 'max-content', 'max-content', 'max-content', '480px']}
    justifyItems={['start', 'start', 'start', 'start', 'start']}
    spacing="3"
    columnGap="4rem"
  >
    <HStack>
      <Icon
        as={BiCalendar}
        w={5}
        h={5}
        marginRight="8px"
      />
      <Text
        size="sm"
        width="max-content"
      >
        {eventObj.dateTimeObj.dateStr}
      </Text>
    </HStack>
    <HStack>
      <Icon
        as={FaRegClock}
        w={5}
        h={5}
        marginRight="8px"
      />
      <Text
        size="sm"
      >
        {eventObj.dateTimeObj.timeStr || 'TBD'}
      </Text>
    </HStack>
    <HStack>
      <Icon
        as={BiCurrentLocation}
        w={5}
        h={5}
        marginRight="8px"
      />
      <Text
        size="sm"
      >
        {eventObj.location || 'TBD'}
      </Text>
    </HStack>
    <HStack>
      <Icon
        as={BiRupee}
        w={5}
        h={5}
        marginRight="8px"
      />
      <Text
        size="sm"
      >
        {eventObj.fee || 'Free'}
      </Text>
    </HStack>
    <HStack>
      <Icon
        as={BiMedal}
        w={5}
        h={5}
        marginRight="8px"
      />
      <Text
        size="sm"
      >
        {eventObj.prize || 'No Prize'}
      </Text>
    </HStack>
    <HStack>
      <Icon
        as={BsPersonPlus}
        w={5}
        h={5}
        marginRight="8px"
      />
      <Text
        size="sm"
      >
        {eventObj.teamSize || '1'}
        {' '}
        Member(s)
      </Text>
    </HStack>
  </SimpleGrid>
);

export default EventDetailsGrid;
