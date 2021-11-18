import styles from "./footer.module.css";
import Categories from "./Categories";
import ContactUs from "./ContactUs";
import FooterGallery from "./FooterGallery";
import Social from "./Social";

export default function Footer() {

    return (
        <section className={styles.footer_wrapper}>
            <ContactUs/>
            <Categories/>
            <Social/>
            <FooterGallery/>
        </section>
    )
}
