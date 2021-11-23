import {useRouter} from "next/router";
import styles from "./language.module.css";

export default function Language({language, data_language}) {
    const router = useRouter();

    const changeLanguage = async (data_language) => {
        await router.replace(router.asPath, null, {locale: data_language});
    };

    return (
        <div onClick={changeLanguage} className={styles.lang_switcher}>
            {language}
        </div>
    )
}
