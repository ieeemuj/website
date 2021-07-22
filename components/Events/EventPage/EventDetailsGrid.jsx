import {
  HStack, Icon, SimpleGrid, Text,
} from '@chakra-ui/react';
import {
  BiCalendar, BiCurrentLocation, BiMedal, BiRupee,
} from 'react-icons/bi';
import { BsPersonPlus } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa';

const EventDetailsGrid = () => (
  <SimpleGrid
    columns={['1', '1', '1', '1', '2']}
    width={['100%', '100%', '100%', '100%', '440px']}
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
        31st July, 2021
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
        10:00 AM - 3:00 PM
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
        Microsoft Teams
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
        Free
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
        No Prize
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
        2 - 4 Member(s)
      </Text>
    </HStack>
  </SimpleGrid>
);

export default EventDetailsGrid;
