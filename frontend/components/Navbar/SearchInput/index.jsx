import styles from "./searchInput.module.css";

export default function SearchInput() {

    return (
        <div className={styles.wrap_input}>
            <input className={styles.search_input}/>
            <a className={styles.icon_magnifier}/>
        </div>
    )
}
