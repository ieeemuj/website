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
// Styles
import styles from '../../../styles/Navbar.module.css';
import ResponsiveContainer from '../ResponsiveContainer';

const NavLinks = () => (
  <>
    <NavLink to="/">
      <span className={styles.underLineAnimation}>HOME</span>
    </NavLink>
    <NavLink to="/events">
      <span className={styles.underLineAnimation}>EVENTS</span>
    </NavLink>
    <NavLink to="/projects">
      <span className={styles.underLineAnimation}>PROJECTS</span>
    </NavLink>
    <NavLink to="/ieeewie">
      <span className={styles.underLineAnimation}>SOCIETIES</span>
    </NavLink>
    <NavLink to="/ieeecs">
      <span className={styles.underLineAnimation}>TEAM</span>
    </NavLink>
    <NavLink to="/ieeecs">
      <span className={styles.underLineAnimation}>CONTACT US</span>
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
