import { SimpleGrid } from '@chakra-ui/react';
import useInView from '../../../hooks/useInView';
import StatBox from './StatBox';

const StatGroup = ({ stats }) => {
  const [containerRef, vis] = useInView({ threshold: 0.75 });

  return (
    <SimpleGrid
      ref={containerRef}
      columns="2"
      height={['280px', '360px', '400px', '400px', '400px', '440px']}
      width={['100%', '360px', '400px', '400px', '400px', '440px']}
      spacing="24px"
      paddingBottom="0%"
    >
      {stats.map((stat) => (
        <StatBox
          key={stat.statistic_subject}
          numtext={stat.statistic_number}
          subtext={stat.statistic_subject}
          visible={vis}
        />
      ))}
    </SimpleGrid>
  );
};

export default StatGroup;
