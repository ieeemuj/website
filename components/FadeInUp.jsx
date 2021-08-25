import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import useInView from '../hooks/useInView';
import MotionBox from './MotionBox';

const FadeInUp = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 }, 'section');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      width="100%"
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, type: 'tween', ease: 'linear' }}
      variants={{
        visible: {
          y: 0, opacity: 1,
        },
        hidden: {
          y: '5%', opacity: 0,
        },
      }}
    >
      {children}
    </MotionBox>
  );
};

export default FadeInUp;
