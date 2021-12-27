import styles from "../header.module.css";
import DropdownMenu from "./dropdownMenu";
import SubcategoryMenu from "./subcategoryMenu";
import {useTranslation} from "next-i18next";
import Link from "../../Link";

export default function Navbar({categories = []}) {
    const {t} = useTranslation("common");
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li><Link href='/' className={styles.link}>{t("navBar.home")}</Link></li>
                {categories.map(category => (
                    <li key={category.id}><DropdownMenu category={category}/></li>
                ))}
                <li><Link href='/gallery' className={styles.link}>{t("navBar.gallery")}</Link></li>
                <li><Link href='/file/price.pdf' target='_blank' className={styles.link}>{t("navBar.price")}</Link></li>
            </ul>
        </nav>
    )
}
