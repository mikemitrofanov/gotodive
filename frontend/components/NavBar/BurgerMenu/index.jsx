import { useSelector } from "react-redux";
import { burgerMenuState } from "../../../store/slice/burgerMenu";
import LinksLanguages from "../LinksLanguages";
import styles from "./burgerMenu.module.css";
import LinksMenu from "../LinksMenu";

export default function BurgerMenu() {
  const isBurgerMenuOpen = useSelector(burgerMenuState);

  const doNotClose = (event) => {
    event.stopPropagation();
  };

  return (
    <nav className={`${!isBurgerMenuOpen && styles.top_nav_bar_block_burger}`}>
      <div onClick={doNotClose} className={styles.background_burger}>
        <article className={styles.main_block_container_burger}>
          <LinksMenu />
          <div className={styles.wrapper_languages_burger}>
            <LinksLanguages />
          </div>
        </article>
      </div>
    </nav>
  );
}
