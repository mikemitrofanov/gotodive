import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { stateBurgerMenu } from "../../../../store/slice/burgerMenuSlice";
import { setDefaultLanguage } from "../../../../store/slice/defaultLanguageSlice";
import styles from "./linkLanguages.module.css";
import { useTranslation } from "react-i18next";

export default function LinkLanguages({ language, data_language }) {
  const { i18n } = useTranslation("translation", { useSuspense: false });
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);
  const dispatch = useDispatch();

  const changeLanguage = (event, language) => {
    i18n.changeLanguage(language);
    dispatch(setDefaultLanguage(language));
    // event.preventDefault();
  };

  return (
    <Link href={`/${data_language}`} locale={data_language}>
      <a onClick={(event) => changeLanguage(event, data_language)} className={`lang_switcher ${isOpenBurgerMenu ? styles.languages_burger : styles.languages}`}>
        {language}
      </a>
    </Link>
  );
}
