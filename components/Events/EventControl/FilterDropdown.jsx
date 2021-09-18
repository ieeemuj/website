import {
  Button, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const FitlerDropdown = ({ items, onChange, initialValue }) => {
  const [state, setState] = useState(initialValue || '');

  const handleChange = (e) => {
    const newState = e.target.textContent;
    setState(newState);
    if (onChange !== undefined) onChange(newState);
  };
  return (
    <Menu
      autoSelect={false}
      matchWidth
    >
      <MenuButton
        as={Button}
        width="100%"
        rightIcon={<BiChevronDown />}
        size="lg"
        backgroundColor="#F8FAFC"
        color="black"
        _hover={{
          boxShadow: 'none',
          bgColor: '#F8FAFC',
        }}
        _expanded={{
          boxShadow: 'none',
          bgColor: '#F8FAFC',
        }}
        _focus={{
          boxShadow: 'none',
          bgColor: '#F8FAFC',
        }}
        flexBasis={['auto', '50%']}
        flexGrow="1"
      >
        {state}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            key={item}
            onClick={(e) => handleChange(e)}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>

    </Menu>
  );
};

export default FitlerDropdown;
