/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Children } from 'react';
import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import styles from '../../../styles/Navbar.module.css';

const NavLink = ({ to, children, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const match = !!(asPath === to || asPath === props.as);

  return (
    <>
      <NextLink
        href={to}
        passHref
      >
        <Link
          px={2}
          py={1}
          color="black"
          _hover={{
            textDecoration: 'none',
          }}
        >
          {React.cloneElement(child, {
            className: `${styles.underLineAnimation} ${match ? styles.active : ''}`,
          })}
        </Link>

      </NextLink>

    </>
  );
};

export default NavLink;
