import { Badge, HStack } from '@chakra-ui/react';

const OrganizedByBadge = ({ club }) => {
  let colorScheme = 'cyan';

  if (club === 'CS') {
    colorScheme = 'orange';
  } else if (club === 'WIE') {
    colorScheme = 'pink';
  }

  return (
    <HStack>
      <Badge
        fontSize="0.8em"
        padding="4px 8px"
        variant="subtle"
        colorScheme={colorScheme}
        rounded="md"
      >
        IEEE
        {' '}
        {club}
        {' '}
        MUJ
      </Badge>
    </HStack>
  );
};

export default OrganizedByBadge;
