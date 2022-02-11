import styles from "../styles/error404.module.css";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Container from "@/components/shared/Container";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Error404() {
    const {t} = useTranslation("404_page");
    const router = useRouter();

    useEffect(() => {
            const timer = setTimeout(() => {
                router.push('/')
            }, 3000);
            return () => clearTimeout(timer);
        },
        [])

    return (
        <Container background={styles.background} container={styles.container}>
            <h1 className={styles.title}>
                404 - {t("message")}
            </h1>
            <Link href={'/'}>
                <a className={styles.button}>
                    {t("button")}
                </a>
            </Link>
        </Container>
    )
}

export async function getStaticProps({locale}) {

    return {
        props: {
            ...await serverSideTranslations(locale, ['404_page']),
        }
    }
}
