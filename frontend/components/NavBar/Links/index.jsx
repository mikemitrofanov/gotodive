import Link from "next/link";
import CategoryServicesDropdown from "../CategoryServicesDropdown";
import styles from './links.module.css'

export default function Links({ isOpened, categories }) {
  return (
    <>
      <Link href='/'>
        <a className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links}`}>
          Главная
        </a>
      </Link>
      {categories.map((category) => (
        <CategoryServicesDropdown
          category={category}
          key={category.title}
          isOpened={isOpened}
        />
      ))}
      <Link href='/gallery'>
         <a className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links }`} >
          Галерея
        </a>
      </Link>
      <Link href='/prices'>
        <a className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links }`} >
          Прайс
        </a>
      </Link>
    </>
  );
}
