import styles from "./footer.module.css";
import Categories from "./Items/Categories";
import ContactUs from "./Items/ContactUs";
import Gallery from "./Items/Gallery";
import Social from "./Items/Social";
import {useTranslation} from "next-i18next";

export default function Footer() {
    const {t} = useTranslation("common");

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <ContactUs title={t("footer.contactUs")}/>
                <Categories title={t("footer.contactUs")}/>
                <Social title={t("footer.social")}/>
                <Gallery title={t("footer.gallery")}/>
            </div>
        </section>
    )
}
