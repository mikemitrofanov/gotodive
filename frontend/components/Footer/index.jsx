import styles from "./footer.module.css";
import Categories from "./Items/Categories";
import ContactUs from "./Items/ContactUs";
import Gallery from "./Items/Gallery";
import Social from "./Items/Social";

export default function Footer() {

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <ContactUs/>
                <Categories/>
                <Social/>
                <Gallery/>
            </div>
        </section>
    )
}
