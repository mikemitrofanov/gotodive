import Link from "next/link";
import styles from "./linkLanguages.module.css";

export default function LinkLanguages({ isOpened, language }) {
  return (
    <Link href='/prices'>
      <a className={`${isOpened ? styles.languages_burger : styles.languages}`}>{language}</a>
    </Link>
  );
}
