import styles from "../service.module.css";

export default function ContentItem({title, value}) {

    return (
        <>
            {value && (
                <p className={styles.text}>
                    <span className={styles.bold_text}>{title}</span>
                    {value}
                </p>
            )}
        </>
    )
}
