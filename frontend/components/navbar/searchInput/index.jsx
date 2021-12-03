import styles from "./searchInput.module.css";
import {useState} from "react";

export default function SearchInput() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <form className={styles.wrap_input}>
            <input className={styles.search_input}
                   type="text"
                   onChange={(e) => setSearchQuery(e.target.value)}
                   value={searchQuery}
            />
            {searchQuery && <span className={styles.clear} onClick={() => setSearchQuery('')}/>}
            <button className={styles.icon_magnifier} type="submit"/>
        </form>
    )
}
