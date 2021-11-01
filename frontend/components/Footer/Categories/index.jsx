import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useGetAllCategoriesQuery } from "../../../store/categories/action";
import { defaultLanguage } from "../../../store/slices/defaultLanguage";
import styles from "./categories.module.css";

export default function Categories() {
  const language = useSelector(defaultLanguage);
  const { data } = useGetAllCategoriesQuery(language);
  const { t } = useTranslation("common");
  const categories = data ? data : [];

  return (
    <article className={styles.categories_wrapper}>
      <h1 className={styles.categories_heading}>Categories</h1>
      {categories.data?.length ? (
        categories.data.map((category, index) => (
          <Link key={index} href='#'>
            <a className={styles.categories}>{category.title}</a>
          </Link>
        ))
      ) : (
        <>
          <Link href='#'>
            <a className={styles.categories}>{t("footer.diving")}</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>{t("footer.divingTraining")}</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>{t("footer.becomeDivePro")}</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>{t("footer.excursions")}</a>
          </Link>
          <Link href='/price'>
            <a className={styles.categories}>{t("footer.price")}</a>
          </Link>
        </>
      )}
    </article>
  );
}
