import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import { data } from "../categoriesWithServices";
import styles from '../styles/navBar.module.css'

export default function NavBar() {
    const categories = data.data

    return (
        <nav className={styles.top_nav_bar_block}>
            <div className={styles.main_block_container}>
                <button className={styles.humburger_menu}></button>
                <div className={''}>
                    <Link href='/'>
                        <a className={styles.main_nav_links}>Главная</a>
                    </Link>
                    {categories.map(category => (
                        <CategoryServicesDropdown category={category} key={category.title} />
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
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <Link href='/prices'>
                        <a className={styles.languages} >RU</a>
                    </Link>
                    <Link href='/prices'>
                        <a className={styles.languages}  >UKR</a>
                    </Link>
                    <Link href='/prices'>
                        <a className={styles.languages}  >EN</a>
                    </Link>
                    <Link href='/prices'>
                        <a className={styles.top_bar_user_icon}><FontAwesomeIcon icon={faUserPlus} /></a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}