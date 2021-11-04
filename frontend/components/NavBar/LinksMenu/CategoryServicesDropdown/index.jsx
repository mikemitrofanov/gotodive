import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import { useGetAllCategoriesQuery } from "../../../../store/api/categories";
import { burgerMenuState } from "../../../../store/slices/burgerMenu";
import styles from "./categoryServicesDropdown.module.css";

export default function CategoryServicesDropdown() {
  const isBurgerMenuOpen = useSelector(burgerMenuState);
  const router = useRouter();
  const { data } = useGetAllCategoriesQuery(router.locale);
  const [dataDropdown, setDataDropdown] = useState(data?.data);

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
    <span className={data && styles.wrapper_dropdown}>
      {dataDropdown
        ? dataDropdown.map((category, index) => (
            <span key={index} className={`${isBurgerMenuOpen ? styles.dropdown_burger : styles.dropdown}`}>
              <span onClick={checkOpenDropdown} id={category.id} className={`${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links} ${category.isOpened && styles.active_link_dropdown}`}>
                {category.title}
                <FontAwesomeIcon className={`${category.isOpened ? styles.active_arrows : styles.arrows}`} icon={faPlay} />
              </span>
              <div onClick={(event) => doNotClose({ event })} className={`${isBurgerMenuOpen ? styles.dropdown_content_burger : styles.dropdown_content} ${category.isOpened && styles.noHidden}`}>
                {category.services.map((dataDrodown, index) => (
                  <a key={index} href='#' className={`${isBurgerMenuOpen ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                    {dataDrodown.title}
                  </a>
                ))}
              </div>
            </span>
          ))
        : null}
    </span>
  );
}
