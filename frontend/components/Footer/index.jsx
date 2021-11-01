import styles from "./footer.module.css";
import Categories from "./Categories";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import Social from "./Social";

export default function Footer() {
  return (
    <section className={styles.footer_wrapper}>
      <ContactUs />
      <Categories />
      <Social />
      <Gallery />
    </section>
  );
}
