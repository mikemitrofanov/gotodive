import styles from "./linkLanguages.module.css";

export default function LinkLanguages({ isOpened, language, data_language }) {
  return (
    <span data_language={data_language} className={`lang_switcher ${isOpened ? styles.languages_burger : styles.languages}`}>
      {language}
    </span>
  );
}
