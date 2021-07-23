import { Box, HStack, VStack, Image, Text, Icon, Link } from '@chakra-ui/react';

import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
  
  const TeamMemberCard = ({ teamMember }) => (
    <Box
      boxSizing="border-box"
      padding="1rem"
    >
      <VStack spacing="3" height="100%" justify="space-between">
        <Image borderRadius="full" boxSize="140px" src="https://bit.ly/3zoHbf2" />
        <Text fontWeight="semibold" fontSize={20}>Member Name</Text>
        <Text fontWeight="light" fontSize={14} color="gray.600">Member Position</Text>
        <HStack spacing="3">
          <Link href="#"><Icon as={FaLinkedinIn} /></Link>
          <Link href="#"><Icon as={FaInstagram} /></Link>
          <Link href="#"><Icon as={FaFacebookF} /></Link>
        </HStack>
      </VStack>
    </Box>
  );
  
  export default TeamMemberCard;
  