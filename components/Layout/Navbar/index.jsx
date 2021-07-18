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
//Styles
import styles from "../../../styles/Navbar.module.css"
const NavLinks = () => {
  
  return(<>
    <NavLink to="/"><span  className={styles.underLineAnimation} >Home</span></NavLink>
    {NAV_LINKS.map((navMenuLink) => (
      <NavMenuItem navMenu={navMenuLink} key={navMenuLink.title} />
    ))}
    <NavLink to="/events" ><span className={styles.underLineAnimation}>Event</span></NavLink>
    <NavLink to="/projects"><span className={styles.underLineAnimation}>Projects</span></NavLink>
    <NavLink to="/ieeewie"><span className={styles.underLineAnimation}>IEEE WIE</span></NavLink>
    <NavLink to="/ieeecs"><span className={styles.underLineAnimation}>IEEE CS</span></NavLink>
    <NavLink to="/join-us" ><span style={{backgroundColor:'#034188', padding:"0.5em",borderRadius:"5px",color:"white"}}>Join Now</span></NavLink>
  </>)
};



const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={[4, 4, 16, 32]}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>IEEE SB MUJ</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', xl: 'flex' }}>
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
      </Box>
    </>
  );
};

export default Navbar;
