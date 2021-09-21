import Link from "next/link";
import {data} from "../categoriesWithServices";

export default function NavServicesDropdown() {
    const categories = data.data

    return (<>
        {categories.map(category => (
            <span key={category.title} className='dropdown'>
                        <Link href='/'>
                            <a className='main-nav-links'>{category.title}</a>
                        </Link>
                            <span className='single-triangle'/>
                            <div className="dropdown-content">
                            {category.services?.map(service => (
                                <p key={service.title}>{service.title}</p>
                            ))}
                            </div>
                        </span>
        ))}
    </>)
}