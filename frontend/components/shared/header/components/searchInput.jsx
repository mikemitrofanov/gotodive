import styles from "../header.module.css";
import {useRouter} from "next/router";
import {urlToKebabCase} from "@/utils/helpers";

export default function SearchInput({searchQuery, setSearchQuery}) {
    const router = useRouter();

    const hendleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery) router.push(`/search/${urlToKebabCase(searchQuery)}`)
        setSearchQuery('')
    }

    return (
        <form className={styles.wrap_input} onSubmit={hendleSubmit}>
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
