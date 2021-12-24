import Popular from "@/components/mainPage/Popular";
import MainScreen from "@/components/mainPage/MainScreen";
import ContactUs from "@/components/mainPage/ContactUs";
import Team from "@/components/mainPage/Team";
import MainLayout from "../components/layouts/MainLayout";
import {withRedux} from "@/hof/withRedux";
import {apiSlice, useGetPopularServicesQuery} from "@/redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {convertingUrlToSlug} from "../utils/helpers";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import { useDispatch } from "react-redux";

export const teamMembers = [
    {
        id: 1,
        photo: '/images/team/alexGerman.png',
        name: "Aleksandr German",
        description: "great and terrible"
    },
    {
        id: 2,
        photo: '/images/team/yuriiProkhvatilo.png',
        name: "Yurii Prokhvatilo",
        description: "great and terrible"
    },
    {
        id: 3,
        photo: '/images/team/rickSanches.png',
        name: "Rick Sanchez",
        description: "just darling"
    }
]

export default function MainPage() {
    const router = useRouter();
    const {data: popular} = useGetPopularServicesQuery(router.locale);
    const {t} = useTranslation("common");
    const dispatch = useDispatch();
    
    const handleSubmit = async (values) => { 
        await dispatch(apiSlice.endpoints.submittingCotactForm.initiate({language: router.locale, content: values}))
    }
    
    return (
        <>
            <MainScreen t={t}/>
            <Popular title={t("popular.popular")} popular={popular}/>
            <Team title={t("team.ourTeam")} teamMembers={teamMembers}/>
            <ContactUs t={t} handleSubmit={handleSubmit}/>
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
