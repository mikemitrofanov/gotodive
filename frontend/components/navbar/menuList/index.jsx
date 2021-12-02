import styles from "./menuList.module.css";
import DropdownMenu from "./dropdownMenu";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useGetAllCategoriesQuery} from "@/redux/slices/apiSlice";
import ListItemLink from "../../ui/ListItemLink";

export default function MenuList() {
    const {t} = useTranslation("common");
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale);

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <ListItemLink
                        href='/'
                        text={t("navBar.home")}
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
                    <ListItemLink
                        href='/gallery'
                        text={t("navBar.gallery")}
                        className={styles.link}
                    />
                </li>
                <li>
                    <ListItemLink
                        href='/file/price.pdf'
                        text={t("navBar.price")}
                        target='_blank'
                        className={styles.link}
                    />
                </li>
            </ul>
        </nav>
    )
}
