import styles from "styles/searchPage.module.css";
import MainLayout from "@/components/layouts/MainLayout";
import {withRedux} from "@/hof/withRedux";
import {apiSlice, useGetSearchResultQuery} from "@/redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ModalForm from "@/components/servicePage/components/ModalForm";
import {useRouter} from "next/router";
import Container from "@/components/shared/Container";
import ListServiceCards from "@/components/shared/ListServiceCards";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchPage({searchQuery}) {
    const [active, setActive] = useState(false);
    const [serviceId, setServiceId] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();
    const {data: searchResult} = useGetSearchResultQuery({language: router.locale, searchQuery});

    const handleSubmit = async (content) => {
        await dispatch(apiSlice.endpoints.submittingCotactForm.initiate({content, id: serviceId}))
        setActive(false)
    }

    const hendleOpenModalForm = (id) => {
        setServiceId(id)
        setActive(true)
    }
    return (
        <Container background={styles.background} container={styles.container}>
            <ListServiceCards listServices={searchResult} onActive={hendleOpenModalForm}/>
            {active && <ModalForm onClose={() => setActive(false)} setActive={setActive} handleSubmit={handleSubmit}/>}
        </Container>
    )
}

SearchPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({locale, params}, {dispatch}) => {
    await dispatch(apiSlice.endpoints.getAllCategories.initiate(locale));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());
    

    return {
        props: {
            ...(await serverSideTranslations(locale)),
            searchQuery: params.query,
        }
    }
})
