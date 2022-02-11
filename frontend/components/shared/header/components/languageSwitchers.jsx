import styles from "../header.module.css";
import Language from "./language";

export default function LanguageSwitchers() {

    return (
        <div className={styles.language_wrap}>
            <Language data_language='ru' language='RU'/>
            <Language data_language='uk' language='UKR'/>
            <Language data_language='en' language='EN'/>
        </div>
    )
}
