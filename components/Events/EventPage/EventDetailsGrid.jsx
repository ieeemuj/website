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
    columns={['1', '1', '1', '1', '2']}
    width={['100%', '100%', '100%', '100%', '480px']}
    justifyItems={['center', 'center', 'center', 'center', 'start']}
    spacing="5"
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
      >
        {eventObj.dateTime.dateStr}
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
        {eventObj.dateTime.timeStr || 'TBD'}
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
