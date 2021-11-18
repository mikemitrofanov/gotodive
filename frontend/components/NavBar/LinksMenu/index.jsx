import {useTranslation} from "next-i18next";
import CategoryServicesDropdown from "./DropdownMenu";
import LinkMenu from "./LinkMenu";

export default function LinksMenu() {
    const {t} = useTranslation("common");

    return (
        <>
            <LinkMenu href='/' name={t("navBar.home")}/>
            <CategoryServicesDropdown/>
            <LinkMenu href='/gallery' name={t("navBar.gallery")}/>
            <a href='/file/price.pdf' target="_blank">
                {t("navBar.price")}
            </a>
        </>
    );
}
