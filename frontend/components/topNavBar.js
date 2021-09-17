import Link from "next/link";
import {useQuery} from "@redux-requests/react";
import {GET_CATEGORIES} from "../store/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";

export default function TopNavBar() {
    const {data: {data: categories}} = useQuery({type: GET_CATEGORIES, requestKey: 'categories'});
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
                        <a className='mainNavLinks'>Gallery</a>
                    </Link>
                    <Link href='/prices'>
                        <a className='mainNavLinks'>Prices</a>
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