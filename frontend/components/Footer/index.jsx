import ContactUs from "./ContactUs";
import Categories from "./Categories";
import Social from "./Social";
import Gallery from "./Gallery";
import styles from "./footer.module.css";

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
