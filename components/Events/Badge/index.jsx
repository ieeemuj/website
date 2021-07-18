import React from 'react';
import { Text } from '@chakra-ui/react';

const CardBadge = ({ children }) => {
  function getColor(status) {
    let color;
    switch (status.toUpperCase()) {
      case 'UPCOMING':
        color = 'green.500';
        break;
      case 'ONGOING':
        color = 'red.500';
        break;
      case 'COMPLETED':
        color = 'gray.500';
        break;

      default:
        break;
    }
    return color;
  }
  return (
    <Text
      fontWeight="600"
      fontSize="0.8em"
      color={getColor(children)}
      textTransform="uppercase"
    >
      {children}
    </Text>
  );
};

export default CardBadge;
