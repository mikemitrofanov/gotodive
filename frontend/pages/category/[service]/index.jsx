import {withRedux} from "@/hof/withRedux";
import {apiSlice} from "@/redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../../components/layouts/MainLayout";
import Service from "../../../components/service";

export default function ServicePage({id}) {

    return <Service id={id}/>
}

ServicePage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({params, locale}, { dispatch }) => {
    const {error} = await dispatch(apiSlice.endpoints.getServices.initiate({language: locale, id: params.service}));
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
