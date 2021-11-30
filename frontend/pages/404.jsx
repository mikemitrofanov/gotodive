import styles from "../styles/error404.module.css";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Error404() {
    const {t} = useTranslation("404_page");

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    404 - {t("message")}
                </h1>
                <Link href={'/'}>
                    <a className={styles.button}>
                        {t("button")}
                    </a>
                </Link>
            </div>
        </section>
    )
}

export async function getStaticProps({locale}) {

    return {
        props: {
            ...await serverSideTranslations(locale, ['404_page']),
        }
    }
}
