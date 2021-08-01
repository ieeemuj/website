import { useEffect, useRef, useState } from 'react';

const useInView = (options, name) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const copyRef = ref;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(copyRef.current);
      }
    }, options);

    if (copyRef.current) observer.observe(copyRef.current);

    return () => copyRef.current && observer.unobserve(copyRef.current);
  }, [visible, options, name]);

  return [ref, visible];
};

export default useInView;
