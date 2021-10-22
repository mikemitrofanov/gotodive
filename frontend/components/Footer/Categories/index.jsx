import Link from "next/link";
import styles from "./categories.module.css";

export default function Categories() {
  return (
    <article className={styles.categories_wrapper}>
      <h1 className={styles.categories_heading}>Categories</h1>
      <Link href='#'>
        <a className={styles.categories}>Дайвинг</a>
      </Link>
      <Link href='#'>
        <a className={styles.categories}>Обучение дайвингу</a>
      </Link>
      <Link href='#'>
        <a className={styles.categories}>Стань ДАЙВ ПРО</a>
      </Link>
      <Link href='#'>
        <a className={styles.categories}>Экскурсии</a>
      </Link>
      <Link href='#'>
        <a className={styles.categories}>Прайс</a>
      </Link>
    </article>
  );
}
