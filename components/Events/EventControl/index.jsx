import {
  Box, HStack, Input,
} from '@chakra-ui/react';
import ResponsiveContainer from '../../Layout/ResponsiveContainer';
import EventFilter from './EventFilter';

const EventControl = () => (
  <ResponsiveContainer>
    <HStack
      justify="space-between"
      paddingTop="48px"
      paddingBottom="48px"
    >
      <Box
        width="83%"
        height="48px"
      >
        <Input
          height="48px"
          type="tel"
          padding="8px"
          placeholder="Search"
          variant="filled"
          _focus={{
            boxShadow: 'none',
          }}
          paddingLeft="16px"
          paddingRight="16px"
        />
      </Box>
      <Box
        width="17%"
        height="48px"
      >
        <EventFilter />
      </Box>
    </HStack>
  </ResponsiveContainer>
);

export default EventControl;
