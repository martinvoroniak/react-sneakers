import styles from './Card.module.scss'

const Card = (props) => {

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src='/img/heart-unliked.svg' alt='Unliked' />
            </div>
            <img width={133} height={112} src={props.imgUrl} alt='1' />
            <h5>{props.title}</h5>
            <div className={styles.cardContent}>
                <div className={styles.cardPrice}>
                    <span>Ціна:</span>
                    <b>{props.price}</b>
                </div>
                <button className={styles.button} onClick={props.priKlicke}>
                    <img
                        width={11}
                        height={11}
                        src='/img/plus.svg'
                        alt='plus'
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
