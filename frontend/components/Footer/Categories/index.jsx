import { useRouter } from "next/router";
import Link from "next/link";
import { useGetAllCategoriesQuery } from "../../../store/api/categories";
import styles from "./categories.module.css";

export default function Categories() {
  const router = useRouter();
  const { data } = useGetAllCategoriesQuery(router.locale);

  return (
    <>
      {data && (
        <article className={styles.categories_wrapper}>
          <h1 className={styles.categories_heading}>Categories</h1>
          {data.data.map((category, index) => (
            <Link key={index} href='#'>
              <a className={styles.categories}>{category.title}</a>
            </Link>
          ))}
        </article>
      )}
    </>
  );
}
