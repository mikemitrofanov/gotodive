import NavBar from "../../components/NavBar";
import Content from "../../components/innerPages/content";
import Footer from "../../components/footer";
import {withRedux} from "../../hof/withRedux";
import {categoriesApi} from "../../store/categories/action";
import {setDefaultLanguage} from "../../store/slice/defaultLanguageSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Specialization({id}) {

    return (
        <>
            <NavBar/>
            <Content id={id}/>
            <Footer/>
        </>
    )
}

export const getServerSideProps = withRedux(async ({ params, locale }, dispatch) => {
    await dispatch(categoriesApi.endpoints.getService.initiate({language: locale, id: params.id}));

    dispatch(setDefaultLanguage(locale));

    return {
        props: {
            id: params.id,
            ...(await serverSideTranslations(locale)),
        },
    };
});
