import { useSelector } from "react-redux";
import { stateMainMenu } from "../../../store/slice/mainMenuSlice";
import LinksLanguages from "../LinksLanguages";
import styles from "./burgerMenu.module.css";
import LinksMenu from "../LinksMenu";

export default function BurgerMenu() {
  const isOpenMainMenu = useSelector(stateMainMenu);

  const doNotClose = (event) => {
    event.stopPropagation();
  };

  return (
    <nav className={`${isOpenMainMenu && styles.top_nav_bar_block_burger}`}>
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
