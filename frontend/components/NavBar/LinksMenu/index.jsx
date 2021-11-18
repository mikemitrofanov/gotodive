import {useTranslation} from "next-i18next";
import DropdownMenu from "./DropdownMenu";
import styles from "./LinkMenu/linkMenu.module.css";
import {useSelector} from "react-redux";
import {burgerMenuState} from "../../../store/slices/burgerMenu";
import Link from "next/link";
import {useGetAllCategoriesQuery} from "../../../store/api/categories";
import {useRouter} from "next/router";

export default function ListMenu() {
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const {t} = useTranslation("common");
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale === 'uk' ? 'ukr' : router.locale);


    return (
        <ul className={styles.list}>
            <li>
                <Link href='/'>
                    <a className={`${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`}>
                        {t("navBar.home")}
                    </a>
                </Link>
            </li>
            {categories &&
            categories.map(category => (
                <li>
                    <DropdownMenu category={category}/>
                </li>
            ))}
            <li>
                <Link href='/gallery'>
                    <a className={`${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`}>
                        {t("navBar.gallery")}
                    </a>
                </Link>
            </li>
            <li>
                <a href='/file/price.pdf' target='_blank'
                   className={`${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`}
                >
                    {t("navBar.price")}
                </a>
            </li>
        </ul>
    )
}
