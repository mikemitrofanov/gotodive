import Popular from "../components/Popular";
import MainScreen from "../components/MainScreen";
import ContactUs from "../components/ContactUs";
import Team from "../components/Team";
import MainLayout from "../components/layouts/MainLayout";
import {withRedux} from "../hof/withRedux";
import {apiSlice} from "../redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

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

export const getServerSideProps = withRedux(async ({locale}, dispatch) => {
    const language = locale === 'uk' ? 'ukr' : locale;

    await dispatch(apiSlice.endpoints.getAllCategories.initiate(language));
    await dispatch(apiSlice.endpoints.getPopularServices.initiate(language));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        }
    }
})
