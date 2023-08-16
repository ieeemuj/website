import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import CreditsContent from '../Credits/CreditsContent';

const TeamsGrid = ({ yearState, members, ec }) => (
  <SimpleGrid
    columns={['1', '1', '2', '2', '3']}
    height="100%"
    width="100%"
    gap="10"
    alignItems="start"
    wrap="wrap"
  >
    {members.map((member) => {
      if (member.year1 === yearState) {
        return (
          <CreditsContent
            key={member.title}
            image={member.image?.url} 
            name={member.title}
            position={member.position}
            linkedIn={member.linkedIn}
            instagram={member.instagram}
            github={member.github}
            twitter={member.twitter}
            behance={member.behance}
            ec={ec}
          />
        );
      } else {
        return null;
      }
    })}
  </SimpleGrid>
);

export default TeamsGrid;
