import Popular from "../components/popular";
import MainScreen from "../components/mainScreen";
import ContactUs from "../components/contactUs";
import Team from "../components/team";
import MainLayout from "../components/layouts/MainLayout";
import {withRedux} from "../hof/withRedux";
import {apiSlice} from "../redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {convertingUrlToSlug} from "../utils/helpers";

export default function MainPage() {

    return (
        <>
            <MainScreen/>
            <Popular/>
            <Team/>
            <ContactUs/>
        </>
    )
}

MainPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({locale, resolvedUrl}, {dispatch}) => {
    await dispatch(apiSlice.endpoints.getAllCategories.initiate(locale));
    await dispatch(apiSlice.endpoints.getPopularServices.initiate(locale));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());
    await dispatch(apiSlice.endpoints.getMetadata.initiate({language: locale, slug: convertingUrlToSlug(resolvedUrl)}));

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        }
    }
})
