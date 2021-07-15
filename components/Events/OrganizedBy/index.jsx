import { Badge, HStack } from '@chakra-ui/react';

const OrganizedBy = ({ by }) => {
  let colorScheme = 'cyan';

  if (by === 'CS') {
    colorScheme = 'yellow';
  } else if (by === 'WIE') {
    colorScheme = 'pink';
  }

  return (
    <HStack>
      <Badge
        fontSize="0.8em"
        padding="10px"
        variant="subtle"
        colorScheme={colorScheme}
        rounded="lg"
      >
        &#9679; IEEE
        {' '}
        {by}
        {' '}
        MUJ
      </Badge>
    </HStack>
  );
};

export default OrganizedBy;
