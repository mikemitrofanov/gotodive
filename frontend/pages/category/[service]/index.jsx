import {withRedux} from "../../../hof/withRedux";
import {apiSlice} from "../../../redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../../components/layouts/MainLayout";
import Service from "../../../components/service";
import {convertingUrlToSlug} from "../../../utils/helpers";

export default function ServicePage({id}) {

    return <Service id={id}/>
}

ServicePage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({params, locale, resolvedUrl}, {dispatch}) => {
    const {error} = await dispatch(apiSlice.endpoints.getServices.initiate({language: locale, id: params.service}));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());
    await dispatch(apiSlice.endpoints.getMetadata.initiate({language: locale, slug: convertingUrlToSlug(resolvedUrl)}));

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
