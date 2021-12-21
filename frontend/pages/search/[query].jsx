import styles from "styles/searchPage.module.css";
import MainLayout from "@/components/layouts/MainLayout";
import {withRedux} from "@/hof/withRedux";
import {apiSlice, useGetSearchResultQuery} from "@/redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import Container from "@/components/shared/Container";
import ListServiceCards from "@/components/shared/ListServiceCards";

export default function SearchPage({searchQuery}) {
    const router = useRouter();
    const {data: searchResult} = useGetSearchResultQuery({language: router.locale, searchQuery});

    return (
        <Container background={styles.background} container={styles.container}>
            <ListServiceCards listServices={searchResult}/>
        </Container>
    )
}

SearchPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({locale, params}, {dispatch}) => {
    await dispatch(apiSlice.endpoints.getAllCategories.initiate(locale));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());
    // await dispatch(apiSlice.endpoints.getSearchResult.initiate({language: locale, searchQuery: params.query}));

    return {
        props: {
            ...(await serverSideTranslations(locale)),
            searchQuery: params.query,
        }
    }
})
