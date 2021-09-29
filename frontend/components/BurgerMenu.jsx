import { useState } from "react";
import Link from "next/link";
// import { slide as Menu } from "react-burger-menu";
import { data } from "../categoriesWithServices";
import styles from "../styles/navBar.module.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = data.data;
  const showSettings = (event) => {
    // event.preventDefault();
    // console.log(event);
  };

  return (
    <section className={styles["bm-menu-wrap"]} isOpen={isOpen}>
      <nav className={styles.humburger_menu} onClick={showSettings}>
        <Link href='/'>
          <a className={styles.main_nav_links_burger}>Главная</a>
        </Link>
        {categories.map((category) => (
          <span key={category.title} className={styles.dropdown_burger}>
            <Link href='/'>
              <a className={styles.main_nav_links_burger}>{category.title}</a>
            </Link>
            <div className={styles.dropdown_content_burger}>
              {category.services?.map((service) => (
                <p key={service.title}>{service.title}</p>
              ))}
            </div>
          </span>
        ))}

        <Link href='/gallery'>
          <a className={styles.main_nav_links_burger}>Галлерея</a>
        </Link>
        <Link href='/prices'>
          <a className={styles.main_nav_links_burger}>Прайс</a>
        </Link>
        <div className={styles.wrapper}>
          <Link href='/prices'>
            <a className={styles.languages_burger}>RU</a>
          </Link>
          <Link href='/prices'>
            <a className={styles.languages_burger}>UKR</a>
          </Link>
          <Link href='/prices'>
            <a className={styles.languages_burger}>EN</a>
          </Link>
        </div>
      </nav>


    </section>
  );
}
