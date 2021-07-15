import { useState } from 'react';

import styles from '../../styles/Testimonials.module.css';

import TestimonialCard from './TestimonialCard';

const TestimonialGroup = () => {
  const [TContent] = useState([
    { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 1 },
    { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 2 },
    { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 3 },
    { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 4 },
  ]);

  return (
    <div className={styles.TestimonialBackground}>
      <div className={styles.TestimonialPlaceholder}>
        <div className={styles.TestimonialTitle}>
          <span className={styles.TestimonialHeading}>What Students have to say</span>
          <span className={styles.TestimonialSubHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className={styles.TestimonialCardGroup}>
          {TContent.map((content) => (
            <TestimonialCard content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGroup;
