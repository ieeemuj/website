import React from 'react';
import Link from 'next/link';
import {
  Link as NavLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import styles from "../../../styles/Navbar.module.css"
const NavMenuItem = ({ navMenu }) => {
  const { title, links } = navMenu;
  return (
    <>
      <Menu>
        <MenuButton className={styles.underLineAnimation} as={NavLink} variant="link" cursor="pointer"
        px={2}
    py={1}
    color="#000"
   
  _hover={
    {
      fontWeight:"bold",
    }
  }
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
