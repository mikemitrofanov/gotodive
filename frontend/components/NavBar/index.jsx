import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "../BurgerMenu";
import LinksLanguages from "../LinksLanguages";
import LinksMenu from "../LinksMenu";
import { data } from "../../js/categoriesWithServices";
import styles from "./navBar.module.css";

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
      event.target.innerText === "Дайвинг" ||
      event.target.innerText === "Специализация"
    ) {
      event.preventDefault();
      return;
    }
    setIsOpenedMainHeader((isOpenedMainHeader) => !isOpenedMainHeader);
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <section>
      <nav className={`${isOpened && styles.top_nav_bar_block}`}>
        <div className={styles.wrapper_main_head}>
          <article className={styles.main_block_container}>
            <button
              className={styles.humburger_menu_btn}
              onClick={() =>
                openBurgerMenuAndCloseMainHead({
                  event,
                  setIsOpened,
                  setIsOpenedMainHeader,
                })
              }
            ></button>
            <div>
              <LinksMenu isOpened={isOpened} categories={categories} />
            </div>
            <div className={styles.top_search_block}>
              <span className={styles.search_input_container}>
                <input className={styles.top_bar_search_input} />
                <FontAwesomeIcon
                  className={styles.color_search}
                  icon={faSearch}
                />
              </span>
              <LinksLanguages isOpened={isOpened} />
              <Link href='/prices'>
                <a className={styles.top_bar_user_icon}></a>
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
