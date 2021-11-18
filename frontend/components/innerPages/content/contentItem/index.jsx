import styles from "../content.module.css";

export default function ContentItem({title, value}) {

    return (
        <p className={styles.text}>
            <span className={styles.bold_text}>
                {title}
            </span>
            {value}
        </p>
    )
}
