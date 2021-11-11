import {withRedux} from "../../../hof/withRedux";
import {categoriesApi, useGetServicesQuery} from "../../../store/api/categories";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {useRouter} from "next/router";

export default function InnerPage({id}) {
    const router = useRouter();
    const language = router.locale === 'uk' ? 'ukr' : router.locale;
    const {data : service} = useGetServicesQuery({language , id});

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "space-between",
            height: "100vh",
        }}>
            <NavBar/>
            <div>
                InnerPage {service.title}
            </div>
            <Footer/>
        </div>
    )
}

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
