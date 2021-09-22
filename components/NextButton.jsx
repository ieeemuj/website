/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import NLink from 'next/link';

const NextLink = ({
  to, size, children, target,
}) => (
  <>
    <NLink
      href={to}
      passHref
    >
      <Button
        as={Link}
        rel="noreferrer"
        target={target}
        aria-label={`${to}`}
        bgColor="brand.700"
        boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
        padding={size === 'lg' ? '32px' : '16px'}
        rounded="lg"
        color="white"
        _hover={{
          border: 'none',
          textDecoration: 'none',
        }}
        _active={{
          border: 'none',
          boxShadow: 'none',
          transform: 'scale(0.97)',
        }}
        _focus={{
          border: 'none',
          boxShadow: 'none',
          bg: 'brand',
        }}
      >
        {children}
      </Button>
    </NLink>
  </>
);

export default NextLink;
