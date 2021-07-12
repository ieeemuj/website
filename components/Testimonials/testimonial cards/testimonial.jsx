import styles from "../../../styles/Home.module.css";

const TCard = (props) => {
    const TContent = props.TContent;

    return(
        <div className={styles.TestimonialCardGroup}>
            {TContent.map((TCard) => (
                <div className={styles.TestimonialCard} key={TCard.id}>
                    <img src="https://images.unsplash.com/photo-1490059830487-2f86fddb2b4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="person"/>
                    <div className={styles.TestimonialCardContent}>
                        <span className={styles.TestimonialCardBody}>{ TCard.body }</span>
                        <span className={styles.TestimonialCardAuthor}>{ TCard.author }</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TCard;