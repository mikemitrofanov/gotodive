import Navbar from "../navbar";
import Footer from "../footer";
import Head from "next/head";
import {useRouter} from "next/router";

export default function MainLayout({children}) {
    const router = useRouter();

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
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
