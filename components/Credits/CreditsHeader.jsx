import { Heading, Box } from '@chakra-ui/react';

const CreditsHeader = ({
  heading, subHeading, marginY
}) => 
{
return(
  <Box marginY={marginY}>
    <Heading
      width="100%"
      size="lg"
      textAlign="center"
    >
      {heading}
    </Heading>
    <Heading
      width="100%"
      textAlign="center"
      size="sm"
      color = "brand.500"
    >
      {subHeading}
    </Heading>
  </Box>
)};

export default CreditsHeader;
