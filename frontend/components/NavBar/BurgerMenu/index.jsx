import { useSelector } from "react-redux";
import { stateBurgerMenu } from "../../../store/slices/burgerMenu";
import LinksLanguages from "../LinksLanguages";
import styles from "./burgerMenu.module.css";
import LinksMenu from "../LinksMenu";

export default function BurgerMenu() {
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);

  const doNotClose = (event) => {
    event.stopPropagation();
  };

  return (
    <nav className={`${!isOpenBurgerMenu && styles.top_nav_bar_block_burger}`}>
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
