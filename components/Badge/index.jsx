import React from 'react';
import styles from "../../styles/Badge.module.css";

const Badge = ({text}) => {
    return (
        <div className={styles.greenTag}>
              {text}
        </div>
    )
}

export default Badge;