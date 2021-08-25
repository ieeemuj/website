import { Heading } from '@chakra-ui/react';
import TeamsGrid from './TeamsGrid';

const TeamsSection = ({ heading, data }) => (
  <>
    {heading && (
    <Heading
      as="h3"
      width="100%"
      size="md"
      paddingY="32px"
      textAlign="center"
    >
      {heading}
    </Heading>
    )}
    <TeamsGrid members={data} />
  </>
);

export default TeamsSection;
