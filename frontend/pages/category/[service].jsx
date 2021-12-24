import {withRedux} from "@/hof/withRedux";
import {apiSlice, useGetServicesQuery} from "@/redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "@/components/layouts/MainLayout";
import {useState} from "react";
import MainScreen from "@/components/servicePage/MainScreen";
import Content from "@/components/servicePage/Content";
import {useRouter} from "next/router";
import { useDispatch } from "react-redux";

export default function ServicePage({id}) {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const {data: service = {}} = useGetServicesQuery({language: router.locale, id});
    const dispatch = useDispatch();
    
    const handleSubmit = async (content, id) => {
        await dispatch(apiSlice.endpoints.submittingCotactForm.initiate({language: router.locale, content, id}))
    }

    return (
        <>
            <MainScreen/>
            <Content setActive={setActive} active={active} handleSubmit={handleSubmit} service={service}/>
        </>
    )
}

ServicePage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({params, locale}, {dispatch}) => {
    const {error} = await dispatch(apiSlice.endpoints.getServices.initiate({language: locale, id: params.service}));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());

    if (error && error.originalStatus === 404) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(locale)),
            id: params.service,
        }
    }
})
