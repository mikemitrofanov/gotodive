import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeStateSpecializationsDropdownMenu, stateSpecializationsDropdownMenu } from "../../../../store/slice/specializationsDropdownMenu";
import { changeStateDivingDropdownMenu, stateDivingDropdownMenu } from "../../../../store/slice/divingDropdownMenu";
import { useGetAllCategoriesQuery } from "../../../../store/categories/action";
import { defaultLanguage } from "../../../../store/slice/defaultLanguageSlice";
import { fakeDataNavMenu } from "../.././../../js/categoriesWithServices";
import { stateBurgerMenu } from "../../../../store/slice/burgerMenuSlice";
import { switchLanguage } from "../../../../helpers/switchLanguage";
import styles from "./categoryServicesDropdown.module.css";

export default function CategoryServicesDropdown() {
  const isOpenSpecializationsDropdownMenu = useSelector(stateSpecializationsDropdownMenu);
  const isOpenDivingDropdownMenu = useSelector(stateDivingDropdownMenu);
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);
  const language = useSelector(defaultLanguage);
  const valueLanguages = switchLanguage(language);
  const { data } = useGetAllCategoriesQuery(language);
  const dropdown = data ? data : fakeDataNavMenu;
  const dispatch = useDispatch();

  const changeTheStateOfTheDivingDropdownMenu = ({ event }) => {
    dispatch(changeStateDivingDropdownMenu());
    if (isOpenSpecializationsDropdownMenu && event) {
      dispatch(changeStateSpecializationsDropdownMenu());
    }
  };

  const changeTheStateOfTheSpecializationsDropdownMenu = ({ event }) => {
    dispatch(changeStateSpecializationsDropdownMenu());
    if (isOpenDivingDropdownMenu && event) {
      dispatch(changeStateDivingDropdownMenu());
    }
  };

  return (
    <>
      <span onClick={(event) => changeTheStateOfTheDivingDropdownMenu({ event })} className={`${isOpenBurgerMenu ? styles.dropdown_burger : styles.dropdown}`}>
        <span className={`${isOpenBurgerMenu ? styles.main_nav_links_burger : styles.main_nav_links} ${isOpenDivingDropdownMenu && styles.active_link_dropdown}`}>
          {dropdown.data ? dropdown.data[0].title : dropdown.dataDiving.titleDiving[valueLanguages]}
          <FontAwesomeIcon className={`${isOpenDivingDropdownMenu ? styles.active_arrows : styles.arrows}`} icon={faPlay} />
        </span>
        <div className={`${isOpenBurgerMenu ? styles.dropdown_content_burger : styles.dropdown_content} ${isOpenDivingDropdownMenu && styles.noHidden}`}>
          {dropdown.data
            ? dropdown.data[0].services.map((service, index) => (
                <a key={index} href='#' className={`${isOpenBurgerMenu ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                  {service.title}
                </a>
              ))
            : dropdown.dataDiving.diving.map((service, index) => (
                <a key={index} href='#' className={`${isOpenBurgerMenu ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                  {service}
                </a>
              ))}
        </div>
      </span>

      <span onClick={(event) => changeTheStateOfTheSpecializationsDropdownMenu({ event })} className={`${isOpenBurgerMenu ? styles.dropdown_burger : styles.dropdown}`}>
        <span className={`${isOpenBurgerMenu ? styles.main_nav_links_burger : styles.main_nav_links} ${isOpenSpecializationsDropdownMenu && styles.active_link_dropdown}`}>
          {dropdown.data ? dropdown.data[1].title : dropdown.dataSpecializations.titleSpecializations[valueLanguages]}
          <FontAwesomeIcon className={`${isOpenSpecializationsDropdownMenu ? styles.active_arrows : styles.arrows}`} icon={faPlay} />
        </span>
        <div className={`${isOpenBurgerMenu ? styles.dropdown_content_burger : styles.dropdown_content} ${isOpenSpecializationsDropdownMenu && styles.noHidden}`}>
          {dropdown.data
            ? dropdown.data[1].services.map((service, index) => (
                <a key={index} href='#' className={`${isOpenBurgerMenu ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                  {service.title}
                </a>
              ))
            : dropdown.dataSpecializations.specializations.map((service, index) => (
                <a key={index} href='#' className={`${isOpenBurgerMenu ? styles.dropdown_links_burger : styles.dropdown_links}`}>
                  {service}
                </a>
              ))}
        </div>
      </span>
    </>
  );
}
