import styles from '../styles/Card.module.css';

export function Card(props) {
    const {id, title, tags, userId, priority, status} = props;
    console.log(title, tags, userId, priority, status);

    return (
        <div className={styles.main}>
            <div className={styles.cardid}>{id}</div>
            <div className={styles.title}>
                <input type="checkbox" />
                <div>{title}</div>
            </div>
            <div className={styles.tags}>
                {tags ? tags.map((tag) => (
                   <div>
                    <div className={styles.dot}></div>
                    <div>{tag}</div>
                   </div> 
                )): null}
            </div>
        </div>  
    );
};