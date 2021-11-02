import { useSelector } from "react-redux";
import { useState } from "react";
import { useGetAllCategoriesQuery } from "../../../../store/categories/action";
import { defaultLanguage } from "../../../../store/slice/defaultLanguageSlice";
import { fakeDataNavMenu } from "../../../../js/categoriesWithServices";
import { stateBurgerMenu } from "../../../../store/slice/burgerMenuSlice";
import { switchLanguage } from "../../../../helpers/switchLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./categoryServicesDropdown.module.css";

export default function CategoryServicesDropdown() {
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);
  const language = useSelector(defaultLanguage);
  const { data } = useGetAllCategoriesQuery(language);
  const dropdown = data ? data.data : fakeDataNavMenu;
  const [dataDropdown, setDataDropdown] = useState(dropdown);
  const valueLanguages = switchLanguage(language);


  const checkOpenDropdown = (event) => {
    const newData = dataDropdown.map((item) => {
      if (item.id === Number(event.target.id)) {
        return { ...item, isOpened: !item.isOpened };
      }
      return { ...item, isOpened: false };
    });

    setDataDropdown(newData);
  };

  const doNotClose = ({ event }) => {
    event.stopPropagation();
  };

  return (
    <span className={styles.wrapper_dropdown}>
      {dataDropdown.map((category, index) => (
        <span key={index} className={`${isOpenBurgerMenu ? styles.dropdown_burger : styles.dropdown}`}>
          <span onClick={checkOpenDropdown} id={category.id} className={`${isOpenBurgerMenu ? styles.main_nav_links_burger : styles.main_nav_links} ${category.isOpened && styles.active_link_dropdown}`}>
            {category.order ? category.title : category.title[valueLanguages]}
            <FontAwesomeIcon className={`${category.isOpened ? styles.active_arrows : styles.arrows}`} icon={faPlay} />
          </span>
          <div onClick={(event) => doNotClose({ event })} className={`${isOpenBurgerMenu ? styles.dropdown_content_burger : styles.dropdown_content} ${category.isOpened && styles.noHidden}`}>
            {category.services.map((dataDrodown, index) => (
              <a key={index} href='#' className={`${isOpenBurgerMenu ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                {dataDrodown.title}
              </a>
            ))}
          </div>
        </span>
      ))}
    </span>

  );
}
