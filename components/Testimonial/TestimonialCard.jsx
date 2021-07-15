import Image from 'next/image';
import styles from '../../styles/Testimonials.module.css';

const TestimonialCard = ({ content }) => (
  <div className={styles.TestimonialCard} key={content.id}>
    <Image
      src="https://images.unsplash.com/photo-1490059830487-2f86fddb2b4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      alt="person"
      width="100"
      height="100"
      objectFit="cover"
    />
    <div className={styles.TestimonialCardContent}>
      <span className={styles.TestimonialCardBody}>{ content.body }</span>
      <span className={styles.TestimonialCardAuthor}>{ content.author }</span>
    </div>
  </div>
);

export default TestimonialCard;
