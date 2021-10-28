import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { setDefaultLanguage } from "../../store/slice/defaultLanguageSlice";
import { categoriesApi } from "../../store/categories/action";
import { withRedux } from "../../hof/withRedux";
import NavBar from "../../components/NavBar";

export default function Gallery() {
  return (
    <>
      <NavBar />
      Gallery
    </>
  );
}

export const getServerSideProps = withRedux(async ({ locale }, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));
  dispatch(setDefaultLanguage(locale));

  return { props: { ...(await serverSideTranslations(locale)) } };
});
