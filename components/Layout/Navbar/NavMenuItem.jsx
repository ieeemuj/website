import React from "react";
import Link from "next/link";
import {
  Link as NavLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const NavMenuItem = ({ navMenu }) => {
  const { title, links } = navMenu;
  return (
    <>
      <Menu>
        <MenuButton as={NavLink} variant={"link"} cursor={"pointer"}>
          {title}
        </MenuButton>
        <MenuList>
          {links.map((link, id) => (
            <MenuItem key={id}>
              <Link href={link.href}>
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
