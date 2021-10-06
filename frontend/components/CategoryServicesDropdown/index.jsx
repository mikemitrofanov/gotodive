import Link from "next/link";
import styles from "./categoryServicesDropdown.module.css";

export default function CategoryServicesDropdown({ isOpened, checkOpenDropdown, category, style }) {
  return (
    <span onClick={(event) => checkOpenDropdown({ event })} className={`${isOpened ? styles.dropdown_burger : styles.dropdown}`}>
      <Link href='#'>
        <a className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links} ${style && styles.active_link_dropdown}`}>{category.title}</a>
      </Link>
      <div className={`${isOpened ? styles.dropdown_content_burger : styles.dropdown_content} ${style && styles.noHidden}`}>
        {category.services?.map((service) => (
          <a key={service.title} href='#' className={`${isOpened ? styles.dropdown_links_burger : styles.dropdown_links}`}>
            {service.title}
          </a>
        ))}
      </div>
    </span>
  );
}
