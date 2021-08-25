import { SimpleGrid } from '@chakra-ui/react';
import CreditsContent from '../Credits/CreditsContent';

const TeamsGrid = ({ members }) => (
  <SimpleGrid
    columns={['1', '1', '2', '2', '3']}
    height="100%"
    width="100%"
    gap="10"
    alignItems="start"
    wrap="wrap"
  >
    {members.map((member) => (
      <CreditsContent
        key={member.title}
        image={member.image.url}
        name={member.title}
        position={member.position}
        linkedIn={member.linkedIn}
        instagram={member.instagram}
        github={member.github}
        twitter={member.twitter}
        behance={member.behance}
      />
    ))}
  </SimpleGrid>
);

export default TeamsGrid;
