import styles from "./languageSwitchers.module.css";
import Language from "./Language";

export default function LanguageSwitchers() {

    return (
        <div className={styles.wrapper}>
            <Language data_language='ru' language='RU'/>
            <Language data_language='uk' language='UK'/>
            <Language data_language='en' language='EN'/>
        </div>
    )
}
