import {withRedux} from "@/hof/withRedux";
import {apiSlice, useGetServicesQuery} from "@/redux/slices/apiSlice";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "@/components/layouts/MainLayout";
import MainScreen from "@/components/servicePage/MainScreen";
import {useRouter} from "next/router";

import styles from "@/components/servicePage/servicePage.module.css";
import Images from "@/components/servicePage/components/Images";
import Container from "@/components/shared/Container";

export default function ParentCategoryPage({id}) {
    const router = useRouter();
    const {data: service = {}} = useGetServicesQuery({language: router.locale, id});

    return (
      <>
        <MainScreen/>
        <Container background={styles.background} container={styles.container}>
            <h2 className={styles.title}>{service.title}</h2>
            <Images photos={service.photos}/>
            <div className={styles.text_box}>
              <div className={styles.inner_wrap}>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
        </Container>
      </>
    )
}

ParentCategoryPage.layout = MainLayout;

export const getServerSideProps = withRedux(async ({params, locale}, {dispatch}) => {
    const {error} = await dispatch(apiSlice.endpoints.getServices.initiate({language: locale, id: params.parent}));
    await dispatch(apiSlice.endpoints.getPhotoGallery.initiate());

    if (error && error.originalStatus === 404) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(locale)),
            id: params.parent,
        }
    }
})
