import Link from "next/link";
import styles from "../styles/navBar.module.css";

export default function BurgerMenu({
  isOpenedMainHeader,
  openBurgerMenuAndCloseMainHead,
  setIsOpened,
  setIsOpenedMainHeader,
  categories,
}) {

  return (
    <nav className={`${isOpenedMainHeader && styles.top_nav_bar_block_burger}`}>
      <div
        className={styles.wrapper_burger}
        onClick={() =>
          openBurgerMenuAndCloseMainHead({
            event,
            setIsOpened,
            setIsOpenedMainHeader,
          })
        }
      >
        <div className={styles.backgraund_burger}>
          <article className={styles.main_block_container_burger}>
            <Link href='/'>
              <a className={styles.main_nav_links_burger}>Главная</a>
            </Link>
            {categories.map((category) => (
              <span key={category.title} className={styles.dropdown_burger}>
                <Link href='/'>
                  <a className={styles.main_nav_links_burger}>
                    {category.title}
                  </a>
                </Link>
                <div className={styles.dropdown_content_burger}>
                  {category.services?.map((service) => (
                    <p key={service.title}>{service.title}</p>
                  ))}
                </div>
              </span>
            ))}
            <Link href='/gallery'>
              <a className={styles.main_nav_links_burger}>Галерея</a>
            </Link>
            <Link href='/prices'>
              <a className={styles.main_nav_links_burger}>Прайс</a>
            </Link>
            <div className={styles.wrapper_languages_burger}>
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
          </article>
        </div>
      </div>
    </nav>
  );
}
