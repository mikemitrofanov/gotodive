import styles from "../servicePage.module.css";

export default function ContentItem({title, value}) {

    return (
        <>
            {value && (
                <p>
                    <span className={styles.bold_text}>{title}</span>
                    {value}
                </p>
            )}
        </>
    )
}
