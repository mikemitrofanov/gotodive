import styles from "../styles/team.module.css";

export default function MemberCard({src, name, description}) {

    return (
        <div className={styles.card}>
            <img className={styles.photo} alt='photo' src={src}/>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}
