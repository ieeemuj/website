import React from 'react';
import Link from 'next/link';
import {
  Link as NavLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const NavMenuItem = ({ navMenu }) => {
  const { title, links } = navMenu;
  return (
    <>
      <Menu>
        <MenuButton as={NavLink} variant="link" cursor="pointer"
        px={2}
    py={1}
    _hover={{
      textDecoration: 'none',
      backgroundColor:'#3182CE',
      borderRadius:'6px',
    }}
    style={{borderRadius:'6px'}}
    
    >
          {title}
        </MenuButton>
        <MenuList>
          {links.map((link) => (
            <MenuItem key={link.gref}>
              <Link passHref href={link.href}>
                <NavLink>{link.name}</NavLink>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default NavMenuItem;
