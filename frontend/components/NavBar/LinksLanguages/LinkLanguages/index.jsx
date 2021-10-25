import { useRef } from "react";
import Link from "next/link";
import styles from "./linkLanguages.module.css";

export default function LinkLanguages({ isOpened, language, data_language, setLanguage }) {
  const languages = useRef("");

  const switchLanguage = () => {
    setLanguage(languages.current.attributes[0].value);
  };

  return (
    <>
      <Link href={data_language} locale={data_language}>
        <a ref={languages} onClick={switchLanguage} data_language={data_language} className={`lang_switcher ${isOpened ? styles.languages_burger : styles.languages}`}>
          {language}
        </a>
      </Link>
    </>
  );
}
