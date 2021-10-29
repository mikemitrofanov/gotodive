import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { defaultLanguage } from "../../../../../store/slice/defaultLanguageSlice";
import { stateBurgerMenu } from "../../../../../store/slice/burgerMenuSlice";
import { switchLanguage } from "../../../../../helpers/switchLanguage";
import styles from "./dropdown.module.css";

export default function Dropdown({ isOpenDropdownMenu, changeTheStateDropdownMenu, index, title, dataDropdown, dropdown }) {
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);
  const language = useSelector(defaultLanguage);
  const valueLanguages = switchLanguage(language);

  const doNotClose = ({ event }) => {
    event.stopPropagation();
  };

  return (
    <span onClick={(event) => changeTheStateDropdownMenu({ event })} className={`${isOpenBurgerMenu ? styles.dropdown_burger : styles.dropdown}`}>
      <span className={`${isOpenBurgerMenu ? styles.main_nav_links_burger : styles.main_nav_links} ${isOpenDropdownMenu && styles.active_link_dropdown}`}>
        {dropdown.data ? dropdown.data[index].title : title[valueLanguages]}
        <FontAwesomeIcon className={`${isOpenDropdownMenu ? styles.active_arrows : styles.arrows}`} icon={faPlay} />
      </span>
      <div onClick={(event) => doNotClose({ event })} className={`${isOpenBurgerMenu ? styles.dropdown_content_burger : styles.dropdown_content} ${isOpenDropdownMenu && styles.noHidden}`}>
        {dropdown.data
          ? dropdown.data[index].services.map((service, index) => (
              <a key={index} href='#' className={`${isOpenBurgerMenu ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                {service.title}
              </a>
            ))
          : dataDropdown.map((service, index) => (
              <a key={index} href='#' className={`${isOpenBurgerMenu ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                {service}
              </a>
            ))}
      </div>
    </span>
  );
}
