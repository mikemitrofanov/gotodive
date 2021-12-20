import styles from "./mainLayouts.module.css";
import Header from "../shared/header";
import Footer from "../footer";
import Head from "next/head";
import {useRouter} from "next/router";
import {useGetAllCategoriesQuery} from "@/redux/slices/apiSlice";

export default function MainLayout({children}) {
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale);

    return (
        <>
            <Head>
                <title>
                    gotodive |
                    {
                        router.asPath
                            .split('')
                            .map(item => (item === '/') ? ' ' : item)
                            .join('')
                    }
                </title>
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <Header categories={categories}/>
            <main className={styles.main}>{children}</main>
            <Footer/>
        </>
    )
}
