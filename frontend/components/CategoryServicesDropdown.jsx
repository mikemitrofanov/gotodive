import Link from "next/link";
import styles from "../styles/navBar.module.css";

export default function CategoryServicesDropdown({ category,isOpened }) {
  return (
    <span className={`${isOpened ? styles.dropdown_burger : styles.dropdown}`}>
      <Link href='/'>
        <a
          className={`${
            isOpened ? styles.main_nav_links_burger : styles.main_nav_links
          }`}
        >
          {category.title}
        </a>
      </Link>
      <div
        className={`${
          isOpened ? styles.dropdown_content_burger : styles.dropdown_content
        }`}
      >
        {category.services?.map((service) => (
          <p key={service.title}>{service.title}</p>
        ))}
      </div>
    </span>
  );
}
