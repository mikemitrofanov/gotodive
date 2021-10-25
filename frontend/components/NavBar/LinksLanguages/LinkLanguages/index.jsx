import Link from "next/link";
import styles from "./linkLanguages.module.css";
import { useTranslation } from "react-i18next";

export default function LinkLanguages({ isOpened, language, data_language, setLanguage }) {
  const { i18n } = useTranslation("translation", { useSuspense: false });

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <Link href={`/${data_language}`} locale={data_language}>
      <a onClick={() => changeLanguage(data_language)} data_language={data_language} className={`lang_switcher ${isOpened ? styles.languages_burger : styles.languages}`}>
        {language}
      </a>
    </Link>
  );
}
