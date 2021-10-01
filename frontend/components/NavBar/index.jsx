import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "./BurgerMenu";
import LinksLanguages from "./LinksLanguages";
import Links from "./Links";
import { data } from "../../js/categoriesWithServices";
import commonStyles from "../../styles/common.module.css";

export default function NavBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedMainHeader, setIsOpenedMainHeader] = useState(true);

  const categories = data.data;

  const openBurgerMenuAndCloseMainHead = ({
    event,
    setIsOpened,
    setIsOpenedMainHeader,
  }) => {
    if (
      event.target.innerHTML === "Дайвинг" ||
      event.target.innerHTML === "Специализация"
    ) {
      event.preventDefault();
      return;
    }
    setIsOpenedMainHeader((isOpenedMainHeader) => !isOpenedMainHeader);
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <section>
      <nav className={`${isOpened && commonStyles.top_nav_bar_block}`}>
        <div className={commonStyles.wrapper_main_head}>
          <article className={commonStyles.main_block_container}>
            <button
              className={commonStyles.humburger_menu_btn}
              onClick={() =>
                openBurgerMenuAndCloseMainHead({
                  event,
                  setIsOpened,
                  setIsOpenedMainHeader,
                })
              }
            ></button>
            <div>
              <Links isOpened={isOpened} categories={categories} />
            </div>
            <div className={commonStyles.top_search_block}>
              <span className={commonStyles.search_input_container}>
                <input className={commonStyles.top_bar_search_input} />
                <FontAwesomeIcon
                  className={commonStyles.color_search}
                  icon={faSearch}
                />
              </span>
              <LinksLanguages isOpened={isOpened} />
              <Link href='/prices'>
                <a className={commonStyles.top_bar_user_icon}></a>
              </Link>
            </div>
          </article>
        </div>
      </nav>
      <BurgerMenu
        isOpenedMainHeader={isOpenedMainHeader}
        openBurgerMenuAndCloseMainHead={openBurgerMenuAndCloseMainHead}
        setIsOpened={setIsOpened}
        setIsOpenedMainHeader={setIsOpenedMainHeader}
        categories={categories}
        isOpened={isOpened}
      />
    </section>
  );
}
