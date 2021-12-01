import styles from "./navbar.module.css";
import BurgerMenu from "./burgerMenu";
import MenuList from "./menuList";
import SearchInput from "./searchInput";
import LanguageSwitchers from "./languageSwitchers";

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
