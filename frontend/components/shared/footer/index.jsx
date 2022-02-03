import styles from "./footer.module.css";
import container_styles from "@/components/shared/styles/container.module.css";
import Categories from "./components/Categories";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Social from "./components/Social";
import Container from "@/components/shared/Container";
import {useTranslation} from "next-i18next";

export default function Footer({photoList, dataFooter, recentServices}) {
    const {t} = useTranslation("common");
    return (
        <Container background={styles.background} container={container_styles.container}>
            <div className={styles.footer_inner_container}>
                <ContactUs title={t("footer.contactUs")} data={dataFooter.contactUs}/>
                <Categories title={t("footer.categories")}  recentServices={recentServices}/>
                <Social title={t("footer.social")}  data={dataFooter.social}/>
                <Gallery title={t("footer.gallery")} photoList={photoList}/>
            </div>
        </Container>
    )
}
