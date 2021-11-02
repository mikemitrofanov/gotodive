import { useSelector } from "react-redux";
import Link from "next/link";
import { defaultLanguage } from "../../../store/slices/defaultLanguage";
import { useGetAllCategoriesQuery } from "../../../store/categories/action";
import { fakeDataFooter } from "../../../fakeDatabase/fakeDataFooter";
import { switchLanguage } from "../../../helpers/switchLanguage";
import styles from "./categories.module.css";

export default function Categories() {
  const { diving, divingTraining, becomeDivePro, excursions, price } = fakeDataFooter;
  const language = useSelector(defaultLanguage);
  const valueLanguages = switchLanguage(language);
  const { data } = useGetAllCategoriesQuery(language);
  const categories = data ? data : fakeDataFooter;

  return (
    <article className={styles.categories_wrapper}>
      <h1 className={styles.categories_heading}>Categories</h1>
      {categories.data ? (
        categories.data.map((category, index) => (
          <Link key={index} href='#'>
            <a className={styles.categories}>{category.title}</a>
          </Link>
        ))
      ) : (
        <>
          <Link href='#'>
            <a className={styles.categories}>{diving[valueLanguages]}</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>{divingTraining[valueLanguages]}</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>{becomeDivePro[valueLanguages]}</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>{excursions[valueLanguages]}</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>{price[valueLanguages]}</a>
          </Link>
        </>
      )}
    </article>
  );
}
