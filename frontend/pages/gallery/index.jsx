import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {categoriesApi} from "../../store/api/categories";
import {withRedux} from "../../hof/withRedux";
import Gallery from "../../components/Gallery";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function GalleryPage() {
  return (
    <>
      <NavBar />
        <Gallery />
      <Footer />
    </>
  );
}

export const getServerSideProps = withRedux(async ({ locale }, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));

  return { props: { ...(await serverSideTranslations(locale)) } };
});
