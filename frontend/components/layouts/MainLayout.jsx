import styles from "./styles/mainLayout.module.css";
import Header from "../header";
import Footer from "../footer";
import Head from "next/head";
import {useRouter} from "next/router";
import {useGetPhotoGalleryQuery} from "@/redux/slices/apiSlice";

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
    const {data: photoList} = useGetPhotoGalleryQuery();

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
            <Header/>
            <main className={styles.main}>{children}</main>
            <Footer photoList={photoList} dataFooter={dataFooter}/>
        </>
    )
}
