import Link from "next/link";
import commonStyles from "../../../styles/common.module.css";

export default function LinksLanguages({ isOpened }) {
  return (
    <>
      <Link href='/prices'>
        <a className={`${ isOpened ? commonStyles.languages_burger : commonStyles.languages }`} >
          RU
        </a>
      </Link>
      <Link href='/prices'>
        <a className={`${ isOpened ? commonStyles.languages_burger : commonStyles.languages }`} >
          UKR
        </a>
      </Link>
      <Link href='/prices'>
        <a className={`${ isOpened ? commonStyles.languages_burger : commonStyles.languages }`} >
          EN
        </a>
      </Link>
    </>
  );
}
