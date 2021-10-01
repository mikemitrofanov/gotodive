import Link from "next/link";
import CategoryServicesDropdown from "../CategoryServicesDropdown";
import commonStyles from "../../../styles/common.module.css";

export default function Links({ isOpened, categories }) {
  return (
    <>
      <Link href='/'>
        <a className={`${isOpened ? commonStyles.main_nav_links_burger : commonStyles.main_nav_links}`}>
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
         <a className={`${isOpened ? commonStyles.main_nav_links_burger : commonStyles.main_nav_links }`} >
          Галерея
        </a>
      </Link>
      <Link href='/prices'>
        <a className={`${isOpened ? commonStyles.main_nav_links_burger : commonStyles.main_nav_links }`} >
          Прайс
        </a>
      </Link>
    </>
  );
}
