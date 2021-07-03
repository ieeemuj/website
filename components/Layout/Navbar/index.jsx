import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { MdMenu, MdClose } from 'react-icons/md';

import NavLink from './NavLink';
import NavMenuItem from './NavMenuItem';

// CONSTANTS
import NAV_LINKS from '../../../constants/NavLinks';

const NavLinks = () => (
  <>
    <NavLink to="/">Home</NavLink>
    {NAV_LINKS.map((navMenuLink) => (
      <NavMenuItem navMenu={navMenuLink} key={navMenuLink.title} />
    ))}
    <NavLink to="/events">Event</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/ieeewie">IEEE WIE</NavLink>
    <NavLink to="/ieeecs">IEEE CS</NavLink>
    <NavLink to="/join-us">Join Us</NavLink>
  </>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={[4, 4, 16, 32]}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>IEEE SB MUJ</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLinks />
          </HStack>
          <IconButton
            variant="ghost"
            colorScheme="blue.50"
            p={3}
            borderRadius="50"
            size="md"
            icon={isOpen ? <MdClose /> : <MdMenu />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <NavLinks />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
