import Footer from "../shared/footer";
import styles from "./mainLayouts.module.css";
import Head from "next/head";
import {useRouter} from "next/router";
import {useGetPhotoGalleryQuery, useGetAllCategoriesQuery} from "@/redux/slices/apiSlice";
import Navbar from "@/components/shared/header/components/navbar";
import Header from "@/components/shared/header";

const dataFooter = {
    'contactUs':
        {
            'location': '777, st. My, Country',
            'phone': '270-177-6026, 275-198-7978',
            'facebook': '@GotoDive',
            'email': 'GotoDive@gmail.com'
        }
    ,
    'categories': ['Diving', 'Diving training', 'Become a DIVE PRO', 'Excursions', 'Price'],
    'social':
        {
            'instagram': '@GotoDive',
            'telegram': '@GotoDive',
            'whatsApp': '@GotoDive',
            'viber': '@GotoDive'
        }
}

export default function MainLayout({children}) {
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale);
    const {data: photoList = []} = useGetPhotoGalleryQuery();

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
            <Footer photoList={photoList} dataFooter={dataFooter}/>
        </>
    )
}
