import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import NavServicesDropdown from "./NavServicesDropdown";

export default function NavBar() {
    return (
        <div className='top-nav-bar-block'>
            <div className='main-block-container'>
                <div className='topNavLinksBlock'>
                    <Link href='/'>
                        <a className='main-nav-links'>Главная</a>
                    </Link>
                    <NavServicesDropdown/>
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