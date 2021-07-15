import React from 'react';
import Badge from '../Badge';
import OrganizedBy from '../OrganizedBy';
import styles from '../../styles/Card.module.css';

const EventCard = ({
  img, category, title, desc,
}) => {
  const style1 = {
    backgroundImage: `url(${img})`,
  };

  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>

          <div className={styles.bg_img} style={style1}>
            <Badge text="UPCOMING" />
          </div>

          <div className={styles.card__info}>
            <OrganizedBy by={category} />
            <br />
            <br />

            <div className={styles.card__title_div}>
              <h3 className={styles.card__title}>
                {' '}
                <b>{title}</b>
                {' '}
              </h3>
            </div>

            <div className={styles.card__desc_div}>
              <h5 className={styles.card__desc}>
                {' '}
                {desc}
                {' '}
              </h5>
            </div>

            <div className={styles.card_more}>
              <a href={styles.know_more} target="_blank" rel="noreferrer">
                Know More
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
