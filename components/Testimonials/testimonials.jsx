import { useState } from "react";

import styles from '../../styles/Home.module.css';

import TCard from "./testimonial cards/testimonial";

const TGroup = () => {
    const [TContent, setTContent] = useState([
        { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 1 },
        { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 2 },
        { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 3 },
        { body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', author: 'Manavendra Sen', id: 4 }
    ]);

    return(
        <div className={styles.TestimonialBackground}>
            <div className={styles.TestimonialPlaceholder}>
                <div className={styles.TestimonialTitle}>
                    <span className={styles.TestimonialHeading}>What Students have to say</span>
                    <span className={styles.TestimonialSubHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <TCard TContent = { TContent } />
            </div>
        </div>
    );
}

export default TGroup;