import Link from "next/link";
// import BurgerMenu from "./BurgerMenu";
import Test from "./Test";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import { data } from "../categoriesWithServices";
import styles from "../styles/navBar.module.css";

export default function NavBar() {
  const categories = data.data;
  const openMenu = (event) => {
    console.dir(event);
  };

  return (
    <section>
      <nav className={styles.top_nav_bar_block}>
        <article className={styles.main_block_container}>
          <button
            className={styles.humburger_menu_btn}
            onClick={openMenu}
          ></button>
          <div>
            <Link href='/'>
              <a className={styles.main_nav_links}>Главная</a>
            </Link>
            {categories.map((category) => (
              <CategoryServicesDropdown
                category={category}
                key={category.title}
              />
            ))}
            <Link href='/gallery'>
              <a className={styles.main_nav_links}>Галлерея</a>
            </Link>
            <Link href='/prices'>
              <a className={styles.main_nav_links}>Прайс</a>
            </Link>
          </div>
          <div className={styles.top_search_block}>
            <span className={styles.search_input_container}>
              <input className={styles.top_bar_search_input} />
              <FontAwesomeIcon
                className={styles.color_search}
                icon={faSearch}
              />
            </span>
            <Link href='/prices'>
              <a className={styles.languages}>RU</a>
            </Link>
            <Link href='/prices'>
              <a className={styles.languages}>UKR</a>
            </Link>
            <Link href='/prices'>
              <a className={styles.languages}>EN</a>
            </Link>
            <Link href='/prices'>
              <a className={styles.top_bar_user_icon}></a>
            </Link>
          </div>
        </article>
      </nav>

      <nav className={styles.top_nav_bar_block_burger}>
        <article className={styles.main_block_container}>
          <div>
            <Link href='/'>
              <a className={styles.main_nav_links_burger}>Главная</a>
            </Link>
            {categories.map((category) => (
              <span key={category.title} className={styles.dropdown}>
                <Link href='/'>
                  <a className={styles.main_nav_links_burger}>
                    {category.title}
                  </a>
                </Link>
                <div className={styles.dropdown_content}>
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
            <Link href='/prices'>
              <a className={styles.languages}>RU</a>
            </Link>
            <Link href='/prices'>
              <a className={styles.languages}>UKR</a>
            </Link>
            <Link href='/prices'>
              <a className={styles.languages}>EN</a>
            </Link>
          </div>
        </article>
      </nav>

      {/* <Test /> */}
      {/* <BurgerMenu /> */}
    </section>
  );
}
