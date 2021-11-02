import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { stateBurgerMenu } from "../../../../store/slices/burgerMenu";
import styles from "./linkLanguages.module.css";

export default function LinkLanguages({ language, data_language }) {
  const isOpenBurgerMenu = useSelector(stateBurgerMenu);
  const router = useRouter();

  const changeLanguage = async (language) => {
    await router.replace(router.pathname, null, { locale: language });
  };

  return (
    <span onClick={() => changeLanguage(data_language)} className={`lang_switcher ${isOpenBurgerMenu ? styles.languages_burger : styles.languages}`}>
      {language}
    </span>
  );
}
