import {
  Box,
  Button, Checkbox, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

const EventFilter = () => (
  <Menu>
    <MenuButton
      as={Button}
      rightIcon={<BiChevronDown />}
      width="100%"
      height="48px"
      rounded="lg"
      _focus={{
        boxShadow: 'none',
      }}
    >
      Filter
    </MenuButton>
    <MenuList
      rounded="lg"
    >
      <Box
        width="100%"
        paddingX="8px"
      >
        <Button
          width="100%"
          _focus={{
            boxShadow: 'none',
          }}
        >
          Clear filters
        </Button>
      </Box>
      <MenuGroup title="Clubs">
        <MenuItem as={Checkbox}>IEEE SB MUJ</MenuItem>
        <MenuItem as={Checkbox}>IEEE WIE MUJ</MenuItem>
        <MenuItem as={Checkbox}>IEEE CS MUJ</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Tags">
        <MenuItem as={Checkbox}>Technical</MenuItem>
        <MenuItem as={Checkbox}>Non-Technical</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

export default EventFilter;
