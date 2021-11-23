import styles from "./language.module.css";
import {useRouter} from "next/router";

export default function Language({language, data_language}) {
    const router = useRouter();
    const changeLanguage = async (locale) => {
        await router.replace(router.asPath, null, {locale});
    };

    const isCurrentLanguage = router.locale === data_language;

    return (
        <div onClick={() => changeLanguage(data_language)}
             className={`${styles.language} ${isCurrentLanguage && styles.language_active}`}>
            {language}
        </div>
    )
}
