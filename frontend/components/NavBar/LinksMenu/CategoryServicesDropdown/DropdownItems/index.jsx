import { burgerMenuState } from "../../../../../store/slices/burgerMenu";
import { useSelector } from "react-redux";
import styles from "./dropdownItems.module.css";

export default function DropdownItems({ service }) {
  const isBurgerMenuOpen = useSelector(burgerMenuState);

  return (
    <>
      <a key={service.id} href='#' className={`${isBurgerMenuOpen ? styles.dropdown_links_burger : styles.dropdown_links}`}>
        {service.title}
      </a>
    </>
  );
}
