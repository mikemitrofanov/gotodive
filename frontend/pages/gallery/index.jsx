import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {apiSlice} from "../../redux/slices/apiSlice";
import {withRedux} from "../../hof/withRedux";
import Gallery from "../../components/galleryPage";
import MainLayout from "../../components/layouts/MainLayout";
import {convertingUrlToSlug} from "../../utils/helpers";

export default function GalleryPage() {

    return <Gallery/>
}

GalleryPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({locale, resolvedUrl}, {dispatch}) => {
    await dispatch(apiSlice.endpoints.getMetadata.initiate({language: locale, slug: convertingUrlToSlug(resolvedUrl)}));
    await dispatch(apiSlice.endpoints.getAllCategories.initiate(locale));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());

    return {props: {...(await serverSideTranslations(locale))}};
});
