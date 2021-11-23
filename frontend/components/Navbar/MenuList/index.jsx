import {useTranslation} from "next-i18next";
import DropdownMenu from "./DropdownMenu";
import styles from "./MenuItem/linkMenu.module.css";
import Link from "next/link";
import {useGetAllCategoriesQuery} from "../../../store/api/categories";
import {useRouter} from "next/router";

export default function MenuList() {
    const {t} = useTranslation("common");
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale === 'uk' ? 'ukr' : router.locale);

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href='/'>
                        <a className={styles.link}>
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
                        <a className={styles.link}>
                            {t("navBar.gallery")}
                        </a>
                    </Link>
                </li>
                <li>
                    <a href='/file/price.pdf' target='_blank'
                       className={styles.link}
                    >
                        {t("navBar.price")}
                    </a>
                </li>
            </ul>
        </nav>
    )
}
