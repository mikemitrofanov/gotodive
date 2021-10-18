import Link from "next/link";
import styles from "./linkMenu.module.css";

export default function LinkMenu({ isOpened, href, name, data_translate }) {
  return (
    <Link href={href}>
      <a data_translate={data_translate} className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links}`}>
        {name}
      </a>
    </Link>
  );
}
