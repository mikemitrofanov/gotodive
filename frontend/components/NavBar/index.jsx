import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { changeStateBurgerMenu, stateBurgerMenu } from "../../store/slices/burgerMenu";
import { changeStateMainMenu } from "../../store/slices/mainMenu";
import LinksLanguages from "./LinksLanguages";
import styles from "./navBar.module.css";
import BurgerMenu from "./BurgerMenu";
import LinksMenu from "./LinksMenu";

export default function NavBar() {
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);
  const dispatch = useDispatch();

  const openBurgerMenuAndCloseMainHead = () => {
    dispatch(changeStateMainMenu());
    dispatch(changeStateBurgerMenu());
  };

  return (
    <section>
      <nav className={`${isOpenBurgerMenu && styles.top_nav_bar_block}`}>
        <div className={styles.wrapper_main_head}>
          <article className={styles.main_block_container}>
            <button className={styles.humburger_menu_btn} onClick={() => openBurgerMenuAndCloseMainHead()}></button>
            <div className={styles.wrapper_links}>
              <LinksMenu />
            </div>
            <div className={styles.top_search_block}>
              <span className={styles.search_input_container}>
                <input className={styles.top_bar_search_input} />
                <FontAwesomeIcon className={styles.color_search} icon={faSearch} />
              </span>
              <LinksLanguages />
              <Link href='/prices'>
                <a className={styles.top_bar_user_icon}></a>
              </Link>
            </div>
          </article>
        </div>
      </nav>
      <BurgerMenu />
    </section>
  );
}
