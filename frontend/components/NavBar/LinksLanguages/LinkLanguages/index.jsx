import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {burgerMenuState} from "../../../../store/slices/burgerMenu";
import styles from "./linkLanguages.module.css";

export default function LinkLanguages({language, data_language}) {
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const router = useRouter();

    const changeLanguage = async (language) => {
        await router.replace(router.asPath, null, {locale: language});
    };

    return (
        <span onClick={() => changeLanguage(data_language)}
              className={`lang_switcher ${isBurgerMenuOpen ? styles.languages_burger : styles.languages}`}>
      {language}
    </span>
    );
}
