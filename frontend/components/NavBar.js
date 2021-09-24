import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import CategoryServicesDropdown from "./items/CategoryServicesDropdown";
import {useSelector} from "react-redux";
import {categoriesApi} from "../store/categories/action";

export default function NavBar() {
    const {data: {data}} = useSelector(categoriesApi.endpoints.getAllCategories.select());
    const categories = (Array.isArray(data)) ? data : [];
    return (
        <nav className='top-nav-bar-block'>
            <div className='main-block-container'>
                <button className='grip-button'/>
                <div className='top-nav-links-block'>
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
                        <a>RU</a>
                    </Link>
                    <Link href='/prices'>
                        <a>UKR</a>
                    </Link>
                    <Link href='/prices'>
                        <a>EN</a>
                    </Link>
                    <Link href='/prices'>
                        <a className='top-bar-user-icon '><FontAwesomeIcon icon={faUserPlus}/></a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}