import { Heading, Box } from '@chakra-ui/react';

const CreditsHeader = ({
  heading, marginY,
}) => (
  <Box
    marginY={marginY}
    width="100%"
  >
    <Heading
      width="100%"
      size="lg"
      textAlign="center"
    >
      {heading}
    </Heading>
  </Box>
);

export default CreditsHeader;
