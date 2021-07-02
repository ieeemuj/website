import React from 'react';
import { Link } from '@chakra-ui/react';

const NavLink = ({ to, children }) => (
  <Link
    px={2}
    py={1}
    _hover={{
      textDecoration: 'none',
    }}
    href={to}
  >
    {children}
  </Link>
);

export default NavLink;
