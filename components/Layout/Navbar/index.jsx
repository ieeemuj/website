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
    <NavLink to="/join-us">
      <Button
        colorScheme="brand"
        padding="16px"
        rounded="lg"
      >
        JOIN NOW
      </Button>
    </NavLink>
  </>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box py="16px">
        <ResponsiveContainer>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Heading
              size="lg"
            >
              IEEE SB MUJ
            </Heading>
            <HStack as="nav" spacing={4} display={{ base: 'none', xl: 'flex' }}>
              <NavLinks />
            </HStack>
            <IconButton
              variant="ghost"
              colorScheme="blue.50"
              p={3}
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
