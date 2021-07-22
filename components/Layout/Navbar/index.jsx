import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
  Button,
} from '@chakra-ui/react';
import { MdMenu, MdClose } from 'react-icons/md';

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
    <NavLink to="/projects">
      <span>PROJECTS</span>
    </NavLink>
    <NavLink to="/societies">
      <span>SOCIETIES</span>
    </NavLink>
    <NavLink to="/ieeecs">
      <span>TEAM</span>
    </NavLink>
    <NavLink to="/ieeecs">
      <span>CONTACT US</span>
    </NavLink>
    <Button
      bg="white"
      boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
      padding="16px"
      rounded="lg"
      color="brand"
      _hover={{
        bg: 'brand',
        border: 'none',
      }}
      _active={{
        bg: 'brand',
        transform: 'scale(0.97)',
      }}
      _focus={{ bg: 'brand' }}
    >
      JOIN NOW
    </Button>
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
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Heading
              size="lg"
              color="white"
            >
              IEEE SB MUJ
            </Heading>
            <HStack as="nav" spacing={4} display={{ base: 'none', xl: 'flex' }}>
              <NavLinks />
            </HStack>
            <IconButton
              variant="ghost"
              color="white"
              borderRadius="50"
              size="lg"
              icon={isOpen ? <MdClose /> : <MdMenu />}
              aria-label="Open Menu"
              display={{ xl: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ xl: 'none' }}>
              <Stack as="nav" spacing={4}>
                <NavLinks />
              </Stack>
            </Box>
          ) : null}
        </ResponsiveContainer>

      </Box>
    </>
  );
};

export default Navbar;
