import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {categoriesApi} from "../store/api/categories";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Contact from "../components/Contact";
import {withRedux} from "../hof/withRedux";
import Team from "../components/Team";
import MainLayout from "../components/layouts/MainLayout";

export default function MainPage() {
    return (
        <>
            <SubHeader/>
            <Popular/>
            <Team/>
            <Contact/>
        </>
    );
}

MainPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({locale}, dispatch) => {
    const language = locale === 'uk' ? 'ukr' : locale;
    await dispatch(categoriesApi.endpoints.getAllCategories.initiate(language));
    await dispatch(categoriesApi.endpoints.getPopularServices.initiate(language));
    await dispatch(categoriesApi.endpoints.getPhotoGallery.initiate());

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
});
