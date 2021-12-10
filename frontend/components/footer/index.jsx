import styles from "./footer.module.css";
import Categories from "./components/Categories";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Social from "./components/Social";
import Container from "@/components/shared/Container";
import {useTranslation} from "next-i18next";

export default function Footer({photoList, dataFooter}) {
    const {t} = useTranslation("common");

    return (
        <Container background={styles.background} container={styles.container}>
            <ContactUs title={t("footer.contactUs")} data={dataFooter.contactUs}/>
            <Categories title={t("footer.contactUs")}  data={dataFooter.categories}/>
            <Social title={t("footer.contactUs")}  data={dataFooter.social}/>
            <Gallery title={t("footer.contactUs")} photoList={photoList}/>
        </Container>
    )
}
