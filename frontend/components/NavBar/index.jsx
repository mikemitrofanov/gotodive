import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {burgerMenuState, changeBurgerMenuState} from "../../store/slices/burgerMenu";
import LinksLanguages from "./LinksLanguages";
import styles from "./navBar.module.css";
import BurgerMenu from "./BurgerMenu";
import ListMenu from "./LinksMenu";

export default function NavBar() {
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const dispatch = useDispatch();

    const openBurgerMenu = () => {
        dispatch(changeBurgerMenuState());
    };

    return (
        <section>
            <nav className={`${isBurgerMenuOpen && styles.top_nav_bar_block}`}>
                <div className={styles.wrapper_main_head}>
                    <article className={styles.main_block_container}>
                        <button className={styles.humburger_menu_btn} onClick={openBurgerMenu}/>
                        <div className={styles.wrapper_links}>
                            <ListMenu/>
                        </div>
                        <div className={styles.top_search_block}>
              <span className={styles.search_input_container}>
                <input className={styles.top_bar_search_input}/>
                <FontAwesomeIcon className={styles.color_search} icon={faSearch}/>
              </span>
                            <LinksLanguages/>
                            <a href='#' className={styles.top_bar_user_icon}/>
                        </div>
                    </article>
                </div>
            </nav>
            <BurgerMenu/>
        </section>
    )
}
