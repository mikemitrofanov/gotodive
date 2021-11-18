import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {categoriesApi} from "../../store/api/categories";
import {withRedux} from "../../hof/withRedux";
import Gallery from "../../components/Gallery";
import MainLayout from "../../components/layouts/MainLayout";

export default function GalleryPage() {

    return <Gallery/>
}

GalleryPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({locale}, dispatch) => {
    await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));
    await dispatch(categoriesApi.endpoints.getPhotoGallery.initiate());

    return {props: {...(await serverSideTranslations(locale))}};
});
