import { Heading } from '@chakra-ui/react';

const CreditsHeader = ({
  heading, subHeading
}) => (
  <>
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
  </>
);

export default CreditsHeader;
