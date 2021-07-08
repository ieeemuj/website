import React from 'react';
import { Link } from '@chakra-ui/react';
import {useRouter} from "next/router"


const NavLink = ({ to, children }) => {

  const router=useRouter()
  
  return(
  <>
   
  <Link
    px={2}
    py={1}
    
    _hover={{
      textDecoration: 'none',
      backgroundColor:'#3182CE',
      borderRadius:'6px',
    
      
    }}
    style={{borderRadius:'6px'}}
    href={to}
    bg={router.pathname===to?"#3182CE":""}
   
    color={router.pathname===to?"white":""}
  >
  
    {children}
  </Link>
 
  </>)
};

export default NavLink;
