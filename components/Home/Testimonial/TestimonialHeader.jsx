import { Heading } from '@chakra-ui/react';

const TestimonialHeader = () => (
  <>
    <Heading textAlign="center">
      What Students have to say
    </Heading>
    <Heading
      textAlign={['center', 'center', 'center', 'center', 'left']}
      size="sm"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Heading>
  </>
);

export default TestimonialHeader;
