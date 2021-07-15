import React from 'react';
import { Badge } from '@chakra-ui/react';

const CardBadge = ({ children }) => (
  <Badge
    position="absolute"
    marginTop="25px"
    marginLeft="25px"
    fontSize="0.8em"
    padding="10px"
    variant="solid"
    colorScheme="green"
    rounded="lg"
  >
    {children}
  </Badge>
);

export default CardBadge;
