import styles from "./menuList.module.css";
import DropdownMenu from "./dropdownMenu";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useGetAllCategoriesQuery} from "@/redux/slices/apiSlice";
import Link from "../../shared/Link";

export default function MenuList() {
    const {t} = useTranslation("common");
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale);

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link
                        href='/'
                        children={t("navBar.home")}
                        className={styles.link}
                    />
                </li>
                {categories &&
                categories.map(category => (
                    <li key={category.id}>
                        <DropdownMenu category={category}/>
                    </li>
                ))}
                <li>
                    <Link
                        href='/gallery'
                        children={t("navBar.gallery")}
                        className={styles.link}
                    />
                </li>
                <li>
                    <Link
                        href='/file/price.pdf'
                        children={t("navBar.price")}
                        target='_blank'
                        className={styles.link}
                    />
                </li>
            </ul>
        </nav>
    )
}
