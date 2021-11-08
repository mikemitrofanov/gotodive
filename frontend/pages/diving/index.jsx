import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";
import Content from "../../components/innerPages/content";
import {withRedux} from "../../hof/withRedux";
import {categoriesApi} from "../../store/categories/action";
import {setDefaultLanguage} from "../../store/slice/defaultLanguageSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Diving() {

    return (
        <>
            <NavBar/>
            <Content/>
            <Footer/>
        </>
    )
}

export const getServerSideProps = withRedux(async ({locale}, dispatch) => {
    await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));
    await dispatch(categoriesApi.endpoints.getPopularServices.initiate(locale));
    dispatch(setDefaultLanguage(locale));

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
});
