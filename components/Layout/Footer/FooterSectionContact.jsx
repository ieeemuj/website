import { Box, Text } from '@chakra-ui/react';

const FooterSectionContact = ({ number, name }) => (
  <Box
    paddingTop="8px"
    paddingBottom="8px"
  >
    <a
      href={`tel:${number}`}
      aria-label="id"
    >
      <Text
        color="white"
        size="sm"
      >
        {number}
      </Text>
    </a>
    <Text
      color="white"
      size="sm"
    >
      {name}
    </Text>
  </Box>
);

export default FooterSectionContact;
