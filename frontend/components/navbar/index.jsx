import styles from "./navbar.module.css";
import ListMenu from "../NavBar/LinksMenu";
import {useDispatch, useSelector} from "react-redux";
import {burgerMenuState, changeBurgerMenuState} from "../../store/slices/burgerMenu";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LinksLanguages from "../NavBar/LinksLanguages";
import BurgerMenu from "../NavBar/BurgerMenu";

export default function Navbar() {
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const dispatch = useDispatch();

    const openBurgerMenu = () => {
        dispatch(changeBurgerMenuState());
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                {/*<button className={styles.humburger_menu_btn} onClick={openBurgerMenu}/>*/}
                <nav className={`${isBurgerMenuOpen && styles.top_nav_bar_block}`}>
                    <ListMenu/>
                </nav>
                <div>
                    <span className={styles.search_input_container}>
                         <input className={styles.top_bar_search_input}/>
                          <FontAwesomeIcon className={styles.color_search} icon={faSearch}/>
                     </span>
                    <LinksLanguages/>
                    <a href='#' className={styles.top_bar_user_icon}/>
                </div>
                {/*<BurgerMenu/>*/}
            </div>
        </div>
    )
}
