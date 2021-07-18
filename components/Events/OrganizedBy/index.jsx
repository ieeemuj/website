import { Badge, HStack } from '@chakra-ui/react';

const OrganizedBy = ({ by }) => {
  let colorScheme = 'cyan';

  if (by === 'CS') {
    colorScheme = 'orange';
  } else if (by === 'WIE') {
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
        {by}
        {' '}
        MUJ
      </Badge>
    </HStack>
  );
};

export default OrganizedBy;
