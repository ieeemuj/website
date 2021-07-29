import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import StatBox from './StatBox';

const StatGroup = ({ stats }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const copyRef = ref;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(copyRef.current);
      }
    }, { threshold: 0.75 });

    observer.observe(copyRef.current);
  }, [visible]);

  return (
    <SimpleGrid
      ref={ref}
      columns="2"
      height={['300px', '360px', '400px', '400px', '400px', '440px']}
      width={['300px', '360px', '400px', '400px', '400px', '440px']}
      spacing="24px"
      paddingBottom="0%"
    >
      {stats.map((stat) => (
        <StatBox
          numtext={stat.numtext}
          subtext={stat.subtext}
          visible={visible}
        />
      ))}
    </SimpleGrid>
  );
};

export default StatGroup;
