import { useSelector } from "react-redux";
import { burgerMenuState } from "../../../../../store/slices/burgerMenu";
import styles from "./dropdownItems.module.css";

export default function DropdownItems({ dataDrodown }) {
  const isBurgerMenuOpen = useSelector(burgerMenuState);

  return (
    <>
      <a key={dataDrodown.id} href='#' className={`${isBurgerMenuOpen ? styles.dropdown_links_burger : styles.dropdown_links}`}>
        {dataDrodown.title}
      </a>
    </>
  );
}
