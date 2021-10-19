import { useRef } from "react";
import styles from "./linkLanguages.module.css";

export default function LinkLanguages({ isOpened, language, data_language, setLanguage }) {
  const languages = useRef("");

  const switchLanguage = () => {
    setLanguage(languages.current.attributes[0].value);
  };

  return (
    <span ref={languages} onClick={switchLanguage} data_language={data_language} className={`lang_switcher ${isOpened ? styles.languages_burger : styles.languages}`}>
      {language}
    </span>
  );
}
