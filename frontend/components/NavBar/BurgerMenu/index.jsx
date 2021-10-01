import LinksLanguages from "../LinksLanguages";
import Links from "../Links";
import commonStyles from "../../../styles/common.module.css";

export default function BurgerMenu({
  isOpenedMainHeader,
  openBurgerMenuAndCloseMainHead,
  setIsOpened,
  setIsOpenedMainHeader,
  categories,
  isOpened,
}) {
  return (
    <nav
      className={`${
        isOpenedMainHeader && commonStyles.top_nav_bar_block_burger
      }`}
    >
      <div
        className={commonStyles.wrapper_burger}
        onClick={() =>
          openBurgerMenuAndCloseMainHead({
            event,
            setIsOpened,
            setIsOpenedMainHeader,
          })
        }
      >
        <div className={commonStyles.backgraund_burger}>
          <article className={commonStyles.main_block_container_burger}>
            <Links isOpened={isOpened} categories={categories} />
            <div className={commonStyles.wrapper_languages_burger}>
              <LinksLanguages isOpened={isOpened} />
            </div>
          </article>
        </div>
      </div>
    </nav>
  );
}
