import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {data} from "../categoriesWithServices";
export default function TopNavBar() {
    const categories = data.data
    return (
        <div className='topNavBarBlock'>
            <div className='main-block-container'>
                <div className='topNavLinksBlock'>
                    <Link href='/main'>
                        <a className='mainNavLinks'>Главная</a>
                    </Link>
                    {categories.map(category => (
                        <span className='dropdown'>
                        <Link href='/main'>
                            <a key={category.id} className='mainNavLinks'>{category.title}</a>
                        </Link>
                            <span className='single-triangle'/>
                            <div className="dropdown-content">
                            {category.services?.map(service => (
                                <p>{service.title}</p>
                            ))}
                            </div>
                        </span>
                    ))}
                    <Link href='/gallery'>
                        <a className='mainNavLinks'>Галлерея</a>
                    </Link>
                    <Link href='/prices'>
                        <a className='mainNavLinks'>Прайс</a>
                    </Link>
                </div>
                <div className='topSearchBlock'>
                    <span className='search-input-container'>
                        <input className='topBarSearchInput'/>
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