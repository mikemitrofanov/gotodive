import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { stateBurgerMenu } from "../../store/slice/burgerMenuSlice";
import { stateBurgerMenu } from "../../store/slices/burgerMenu";
import styles from "./subHeader.module.css";

export default function SubHeader() {
  const { t } = useTranslation("common");
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);

  return (
    <section className={styles.header_container}>
      <div className={styles.header_content_container}>
        <div className={styles.wrapper_mobile_background}>
          <article className={styles.header_images_container}>
            <img className={`${isOpenBurgerMenu && styles.hidden_logo} ${styles.header_logo}`} src='images/sub_header/logo.png' />
            <img className={styles.header_image} src='images/sub_header/image_main.png' />
          </article>
          <h1 className={styles.heading_mobile}>{t("subHeader.titleStart")}</h1>
          <h2 className={styles.sub_heading_mobile}>{t("subHeader.titleEnd")}</h2>
        </div>
        <div className={styles.wrapper_content}>
          <h1 className={styles.heading}>{t("subHeader.titleStart")}</h1>
          <h2 className={styles.sub_heading}>{t("subHeader.titleEnd")}</h2>
          <p className={styles.content}>{t("subHeader.description")}</p>
          <p className={styles.sub_content}>{t("subHeader.subDescription")}</p>
        </div>
      </div>
    </section>
  );
}
