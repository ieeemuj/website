import { SimpleGrid } from '@chakra-ui/react';
import StatBox from './StatBox';

const StatGroup = ({ stats }) => (
  <SimpleGrid
    columns="2"
    height={['300px', '360px', '400px', '400px', '400px', '440px']}
    width={['300px', '360px', '400px', '400px', '400px', '440px']}
    spacing="24px"
    paddingBottom="0%"
  >
    {stats.map((stat) => (
      <StatBox numtext={stat.numtext} subtext={stat.subtext} />
    ))}
  </SimpleGrid>
);

export default StatGroup;
