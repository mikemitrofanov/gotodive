import Link from "next/link";
import styles from "./linkMenu.module.css";

export default function LinkMenu({ isOpened, href, name }) {
  return (
    <Link href={href}>
      <a className={`${ isOpened ? styles.main_nav_links_burger : styles.main_nav_links }`} >
        {name}
      </a>
    </Link>
  );
}
