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
    color="black"
    _hover={{
    textDecoration:'none',
    fontWeight:"bold"
      
    }}

    href={to}
    //bg={router.pathname===to?"#3182CE":""}
   
    //color={router.pathname===to?"white":""}
  >
  
    {children}
  </Link>
 
  </>)
};

export default NavLink;
