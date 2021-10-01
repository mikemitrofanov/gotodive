import Link from "next/link";
import styles from "../../../styles/navBar.module.css";

export default function LinksLanguages({ isOpened }) {
  return (
    <>
      <Link href='/prices'>
        <a
          className={`${isOpened ? styles.languages_burger : styles.languages}`}
        >
          RU
        </a>
      </Link>
      <Link href='/prices'>
        <a
          className={`${isOpened ? styles.languages_burger : styles.languages}`}
        >
          UKR
        </a>
      </Link>
      <Link href='/prices'>
        <a
          className={`${isOpened ? styles.languages_burger : styles.languages}`}
        >
          EN
        </a>
      </Link>
    </>
  );
}
