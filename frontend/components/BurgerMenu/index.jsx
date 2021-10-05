import LinksLanguages from "../LinksLanguages";
import LinksMenu from "../LinksMenu";
import styles from "./burgerMenu.module.css";

export default function BurgerMenu({
  isOpenedMainHeader,
  openBurgerMenuAndCloseMainHead,
  setIsOpened,
  setIsOpenedMainHeader,
  categories,
  isOpened,
}) {
  return (
    <nav className={`${isOpenedMainHeader && styles.top_nav_bar_block_burger}`}>
      <div
        className={styles.wrapper_burger}
        onClick={(event) =>
          openBurgerMenuAndCloseMainHead({
            event,
            setIsOpened,
            setIsOpenedMainHeader,
          })
        }
      >
        <div className={styles.backgraund_burger}>
          <article className={styles.main_block_container_burger}>
            <LinksMenu isOpened={isOpened} categories={categories} />
            <div className={styles.wrapper_languages_burger}>
              <LinksLanguages isOpened={isOpened} />
            </div>
          </article>
        </div>
      </div>
    </nav>
  );
}
