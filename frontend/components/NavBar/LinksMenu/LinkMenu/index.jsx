import { useSelector } from "react-redux";
import Link from "next/link";
import { burgerMenuState} from "../../../../store/slice/burgerMenu";
import styles from "./linkMenu.module.css";

export default function LinkMenu({ href, name }) {
  const isBurgerMenuOpen = useSelector(burgerMenuState);

  return (
    <Link href={href}>
      <a className={`${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`}>{name}</a>
    </Link>
  );
}
