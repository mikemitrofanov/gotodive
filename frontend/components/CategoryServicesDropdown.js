import Link from "next/link";
import styles from "../styles/navBar.module.css";

export default function CategoryServicesDropdown({category}) {

    return (
        <span className={styles.dropdown}>
         <Link href='/'>
            <a className={styles.main_nav_links}>{category.title}</a>
         </Link>
            <div className={styles.dropdown_content}>
                {category.services?.map(service => (
                    <p key={service.title}>{service.title}</p>
                ))}
            </div>
        </span>
    )
}