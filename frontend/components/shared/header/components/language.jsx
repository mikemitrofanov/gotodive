import styles from "../header.module.css";
import {useRouter} from "next/router";

export default function Language({language, data_language}) {
    const router = useRouter();
    const isCurrentLanguage = router.locale === data_language;
    const changeLanguage = async (locale) => {
        await router.replace(router.asPath, null, {locale});
    };

    return (
        <div onClick={() => changeLanguage(data_language)}
             className={`${styles.language} ${isCurrentLanguage && styles.language_active}`}>
            {language}
        </div>
    )
}
