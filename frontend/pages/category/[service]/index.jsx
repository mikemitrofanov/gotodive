import {withRedux} from "../../../hof/withRedux";
import {apiSlice} from "../../../redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Content from "../../../components/innerPages/content";
import Header from "../../../components/innerPages/header";
import MainLayout from "../../../components/layouts/MainLayout";

export default function InnerPage({id}) {

    return (
        <>
            <Header/>
            <Content id={id}/>
        </>
    )
}

InnerPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({params, locale}, dispatch) => {
    const language = locale === 'uk' ? 'ukr' : locale;
    const {error} = await dispatch(apiSlice.endpoints.getServices.initiate({language, id: params.service}));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());

    if (error && error.originalStatus === 404) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(locale)),
            id: params.service,
        }
    }
})
