import Link from "next/link";

export default function CategoryServicesDropdown({category}) {

    return (
        <span className='dropdown'>
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
    )
}