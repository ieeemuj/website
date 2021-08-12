import { Heading } from '@chakra-ui/react';
import TeamsGrid from './TeamsGrid';

const TeamsSection = ({ heading, data }) => (
  <>
    {heading && (
    <Heading
      as="h6"
      width="100%"
      size="md"
      paddingY="64px"
      textAlign="center"
    >
      {heading}
    </Heading>
    )}
    <TeamsGrid members={data} />
  </>
);

export default TeamsSection;
