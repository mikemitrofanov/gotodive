import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {categoriesApi} from "../store/api/categories";
import MainScreen from "../components/MainScreen";
import Popular from "../components/Popular";
import ContactUs from "../components/ContactUs";
import {withRedux} from "../hof/withRedux";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Team from "../components/Team";

export default function Main() {

    return (
        <>
            <NavBar/>
            <MainScreen/>
            <Popular/>
            <Team/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export const getServerSideProps = withRedux(async ({locale}, dispatch) => {
    const language = locale === 'uk' ? 'ukr' : locale;

    await dispatch(categoriesApi.endpoints.getAllCategories.initiate(language));
    await dispatch(categoriesApi.endpoints.getPopularServices.initiate(language));

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        }
    }
})
