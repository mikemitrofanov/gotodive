import styles from "./navbar.module.css";
import BurgerMenu from "./BurgerMenu";
import MenuList from "./MenuList";
import SearchInput from "./SearchInput";
import LanguageSwitchers from "./LanguageSwitchers";

export default function Navbar() {

    return (
        <>
            <BurgerMenu/>
            <div className={styles.background}>
                <div className={styles.container}>
                    <MenuList/>
                    <div className={styles.wrapper}>
                        <SearchInput/>
                        <LanguageSwitchers/>
                        <a href='#' className={styles.wrap_user}>
                            <div className={styles.icon_user}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
