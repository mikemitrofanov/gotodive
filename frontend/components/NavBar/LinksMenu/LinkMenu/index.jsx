import { useSelector } from "react-redux";
import Link from "next/link";
import { stateBurgerMenu } from "../../../../store/slices/burgerMenu";
import styles from "./linkMenu.module.css";

export default function LinkMenu({ href, name }) {
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);

  return (
    <Link href={href}>
      <a className={`${isOpenBurgerMenu ? styles.main_nav_links_burger : styles.main_nav_links}`}>{name}</a>
    </Link>
  );
}
