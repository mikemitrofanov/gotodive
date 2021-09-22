import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import {data} from "../categoriesWithServices";
import styles from './navBar.module.css';


export default function NavBar() {
    const categories = data.data

    return (
        <div className={styles.topNavBarBlock}>
            <div className={styles.mainBlockContainer}>
                <div className='topNavLinksBlock'>
                    <Link href='/'>
                        <a className='main-nav-links'>Главная</a>
                    </Link>
                    {categories.map(category => (
                        <CategoryServicesDropdown category={category} key={category.title}/>
                    ))}
                    <Link href='/gallery'>
                        <a className='main-nav-links'>Галлерея</a>
                    </Link>
                    <Link href='/prices'>
                        <a className='main-nav-links'>Прайс</a>
                    </Link>
                </div>
                <div className='top-search-block'>
                    <span className='search-input-container'>
                        <input className='top-bar-search-input'/>
                        <FontAwesomeIcon icon={faSearch}/>
                    </span>
                    <Link href='/prices'>
                        <a className='m-3'>RU</a>
                    </Link>
                    <Link href='/prices'>
                        <a className='m-3'>UKR</a>
                    </Link>
                    <Link href='/prices'>
                        <a className='m-3'>EN</a>
                    </Link>
                    <Link href='/prices'>
                        <a className='top-bar-user-icon '><FontAwesomeIcon icon={faUserPlus}/></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}