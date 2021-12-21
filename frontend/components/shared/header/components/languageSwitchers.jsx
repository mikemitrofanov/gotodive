import styles from "../header.module.css";
import Language from "./language";

export default function LanguageSwitchers() {

    return (
        <div className={styles.language_wrap}>
            <Language data_language='ru' language='RU'/>
            <Language data_language='ua' language='UA'/>
            <Language data_language='en' language='EN'/>
        </div>
    )
}
