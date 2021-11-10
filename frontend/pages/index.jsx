import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { categoriesApi } from "../store/api/categories";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Contact from "../components/Contact";
import { withRedux } from "../hof/withRedux";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
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
    const language = locale === 'uk' ? 'ukr' : locale;
console.log(language)
    await dispatch(categoriesApi.endpoints.getAllCategories.initiate(language));
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate(language));

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
});
