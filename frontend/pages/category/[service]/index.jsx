import {withRedux} from "../../../hof/withRedux";
import {categoriesApi} from "../../../store/api/categories";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Content from "../../../components/innerPages/content";
import Header from "../../../components/innerPages/header";
import MainLayout from "../../../components/layouts/MainLayout";

export default function InnerPage({id}) {

    return (
        <>
            <Header/>
            <Content id={id}/>
        </>
    )
}

InnerPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({params, locale}, dispatch) => {
    const language = locale === 'uk' ? 'ukr' : locale;
    await dispatch(categoriesApi.endpoints.getServices.initiate({language, id: params.service}));

    return {
        props: {
            ...(await serverSideTranslations(locale)),
            id: params.service,
        },
    };
});
