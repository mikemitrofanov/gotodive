import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { setDefaultLanguage } from "../store/slice/defaultLanguageSlice";
import { categoriesApi } from "../store/categories/action";
import SubHeader from "../components/SubHeader";
import { withRedux } from "../hof/withRedux";
import Popular from "../components/Popular";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Team from "../components/Team";

export default function Main() {
  return (
    <>
      <NavBar />
      <SubHeader />
      <Popular />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export const getServerSideProps = withRedux(async ({ locale }, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate(locale));
  dispatch(setDefaultLanguage(locale));

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
});
