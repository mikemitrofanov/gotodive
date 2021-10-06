import { useState } from "react";
import Link from "next/link";
import styles from "./categoryServicesDropdown.module.css";

export default function CategoryServicesDropdown({ category, isOpened }) {
  const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

  const checkOpenDropdown = (event) => {
    // console.log(category);
    // console.log(isOpened);
    // console.log(event);
    // console.log(isOpenedDropdown);

    setIsOpenedDropdown((isOpenedDropdown) => !isOpenedDropdown);
  };

  return (
    <span onClick={checkOpenDropdown} className={`${isOpened ? styles.dropdown_burger : styles.dropdown}`}>
      <Link href='#'>
        <a className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links} ${isOpenedDropdown && styles.active_link_dropdown}`}>{category.title}</a>
      </Link>
      <div className={`${isOpened ? styles.dropdown_content_burger : styles.dropdown_content} ${isOpenedDropdown && styles.noHidden}`}>
        {category.services?.map((service) => (
          <a key={service.title} href='#' className={`${isOpened ? styles.dropdown_links_burger : styles.dropdown_links}`}>
            {service.title}
          </a>
        ))}
      </div>
    </span>
  );
}
