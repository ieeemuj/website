import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
  Button,
  Link,
  Icon,
  Collapse,
  VStack,
} from '@chakra-ui/react';
import { MdMenu, MdClose } from 'react-icons/md';
import NextLink from 'next/link';

import NavLink from './NavLink';
import ResponsiveContainer from '../ResponsiveContainer';

const NavLinks = () => (
  <>
    <NavLink to="/">
      <span>HOME</span>
    </NavLink>
    <NavLink to="/events">
      <span>EVENTS</span>
    </NavLink>
    <NavLink to="https://www.medium.com">
      <span>BLOG</span>
    </NavLink>
    <NavLink to="/societies">
      <span>SOCIETIES</span>
    </NavLink>
    <NavLink to="/team">
      <span>TEAM</span>
    </NavLink>
    <NavLink to="/contactus">
      <span>CONTACT US</span>
    </NavLink>
    <NextLink
      href="/membership"
      passHref
    >
      <Button
        as={Link}
        bg="white"
        boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
        padding="16px"
        rounded="md"
        color="brand"
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
        JOIN NOW
      </Button>
    </NextLink>
  </>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        py="16px"
        bg="#00132B"
      >
        <ResponsiveContainer>
          <Flex
            h={16}
            alignItems="center"
            justifyContent="space-between"
          >
            <NextLink
              href="/"
              passHref
            >
              <VStack
                marginBottom="-18px"
                cursor="pointer"
                spacing="0"
                textAlign="justify"
              >
                <Heading
                  size="md"
                  color="white"
                >
                  IEEE STUDENT BRANCH
                </Heading>
                <Heading
                  size="xs"
                  color="white"
                  width="100%"
                  _after={{
                    content: '""',
                    display: 'inline-block',
                    width: '100%',
                  }}
                >
                  MANIPAL UNIVERSITY JAIPUR
                </Heading>
              </VStack>
            </NextLink>

            <HStack as="nav" spacing={4} display={{ base: 'none', xl: 'flex' }}>
              <NavLinks />
            </HStack>
            <IconButton
              variant="ghost"
              color="white"
              borderRadius="50"
              size="lg"
              icon={isOpen ? (
                <Icon
                  as={MdClose}
                  width="24px"
                  height="24px"
                />
              ) : (
                <Icon
                  as={MdMenu}
                  width="24px"
                  height="24px"
                />
              )}
              aria-label="Open Menu"
              display={{ xl: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              _hover={{
                border: 'none',
                textDecoration: 'none',
                borderRadius: '50',
              }}
              _active={{
                bgColor: 'transparent',
              }}
              _focus={{
                shadow: 'none',
                border: 'none',
              }}
            />
          </Flex>
        </ResponsiveContainer>
        <Collapse
          in={isOpen}
          animateOpacity
        >
          <Box
            p={4}
            bgColor="brand.700"
            width="100%"
            height="calc(100vh - 80px)"
            display={{ xl: 'none' }}
          >
            <Stack
              as="nav"
              spacing={10}
              alignItems="center"
              justify="center"
              height="100%"
            >
              <NavLinks />
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;
