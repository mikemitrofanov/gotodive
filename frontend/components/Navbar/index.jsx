import styles from "./navbar.module.css";
import ListMenu from "../Navbar/MenuList";
import ListLanguages from "../Navbar/ListLanguages";
import BurgerMenu from "../Navbar/BurgerMenu";
import SearchInput from "../Navbar/SearchInput";

export default function Navbar() {

    return (
        <>
            <BurgerMenu/>
            <div className={styles.background}>
                <div className={styles.container}>
                    <ListMenu/>
                    <div className={styles.wrapper}>
                        <SearchInput/>
                        <ListLanguages/>
                        <a href='#' className={styles.wrap_user}>
                            <div className={styles.icon_user}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
