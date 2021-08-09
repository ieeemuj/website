/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '@chakra-ui/react';
import NLink from 'next/link';

import styles from '../styles/NextLink.module.css';

const NextLink = ({ to, children, ...props }) => (
  <>
    <NLink
      href={to}
      passHref
    >
      <Link
        px={2}
        py={1}
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{
          border: 'none',
        }}
        {...props}
      >
        <span
          className={`${styles.link}`}
        >
          {children}
        </span>
      </Link>
    </NLink>
  </>
);

export default NextLink;
