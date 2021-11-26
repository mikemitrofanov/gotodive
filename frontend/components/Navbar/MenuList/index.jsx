import styles from "./menuList.module.css";
import DropdownMenu from "./DropdownMenu";
import MenuItem from "./MenuItem";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useGetAllCategoriesQuery} from "../../../redux/slices/apiSlice";

export default function MenuList() {
    const {t} = useTranslation("common");
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale === 'uk' ? 'ukr' : router.locale);

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <MenuItem href='/' text={t("navBar.home")}/>
                </li>
                {categories && categories.map(category => (
                    <li key={category.id}>
                        <DropdownMenu category={category}/>
                    </li>
                ))}
                <li>
                    <MenuItem href='/gallery' text={t("navBar.gallery")}/>
                </li>
                <li>
                    <MenuItem href='/file/price.pdf' text={t("navBar.price")} target='_blank'/>
                </li>
            </ul>
        </nav>
    )
}
