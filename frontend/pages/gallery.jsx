import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {apiSlice, useGetPhotoGalleryQuery} from "@/redux/slices/apiSlice";
import {withRedux} from "@/hof/withRedux";
import Gallery from "@/components/gallery";
import MainLayout from "@/components/layouts/MainLayout";

export default function GalleryPage() {
    const {data: photoList} = useGetPhotoGalleryQuery();

    return <Gallery photoList={photoList}/>
}

GalleryPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({locale}, dispatch) => {
    await dispatch(apiSlice.endpoints.getAllCategories.initiate(locale));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());

    return {props: {...(await serverSideTranslations(locale))}};
});
