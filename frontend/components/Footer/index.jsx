import styles from "./footer.module.css";
import Categories from "./Categories";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import Social from "./Social";
import {useTranslation} from "next-i18next";

export default function Footer() {
    const { t } = useTranslation("common");

    return (
        <section className={styles.footer_wrapper}>
            <ContactUs title={t("footer.contactUs")}/>
            <Categories title={t("footer.categories")}/>
            <Social title={t("footer.social")}/>
            <Gallery title={t("footer.gallery")}/>
        </section>
    )
}
