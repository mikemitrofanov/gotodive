import Navbar from "../navbar";
import Footer from "../footer";
import Head from "next/head";
import {useRouter} from "next/router";
import {useGetMetadataQuery} from "../../redux/slices/apiSlice";
import {convertingUrlToSlug} from "../../utils/helpers";

export default function MainLayout({children}) {
    const router = useRouter();
    const {data: metadata = {attributes: []}} = useGetMetadataQuery({language: router.locale, slug: convertingUrlToSlug(router.asPath)});

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <link rel="icon" href='/favicon.ico'/>
                {metadata.attributes.map(attribute => (
                    <meta
                        name={attribute.name}
                        content={attribute.content}
                        property={attribute.property}
                        key={attribute.key || attribute.id}
                    />
                ))}
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
