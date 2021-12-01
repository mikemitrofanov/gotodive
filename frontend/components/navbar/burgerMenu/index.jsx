import styles from "./burgerMenu.module.css";
import MenuList from "../menuList";
import LanguageSwitchers from "../languageSwitchers";
import SearchInput from "../searchInput";
import {isOpenBurgerMenu, openBurgerMenu} from "../../../redux/slices/navbarSlice";
import {useDispatch, useSelector} from "react-redux";

export default function BurgerMenu() {
    const isOpenBurger = useSelector(isOpenBurgerMenu);
    const dispatch = useDispatch();

    return (
        <>
            {isOpenBurger && (
                <>
                    <div className={styles.container_menu}>
                        <MenuList/>
                        <LanguageSwitchers/>
                    </div>
                    <div className={styles.blur} onClick={() => dispatch(openBurgerMenu(false))}/>

                </>
            )}
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.burger} onClick={() => dispatch(openBurgerMenu(true))}>
                        <span className={styles.line}/>
                    </div>
                    <SearchInput/>
                    <a href='#' className={styles.wrap_user}>
                        <div className={styles.icon_user}/>
                    </a>
                </div>
            </div>
        </>
    )
}
