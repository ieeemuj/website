import { Heading } from '@chakra-ui/react';

const SocietiesHeader = ({ heading, headingColor, subHeading, subHeadingColor}) => (
  <>
    <Heading
      width="100%"
      size="lg"
      textAlign="center"
      color = {headingColor}
    >
      {heading}
    </Heading>
    <Heading
      width="100%"
      textAlign="center"
      color={subHeadingColor}
      size="sm"
    >
      {subHeading}
    </Heading>
  </>
);

export default SocietiesHeader;
