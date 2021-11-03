import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { setDefaultLanguage } from "../../store/slices/defaultLanguage";
import { categoriesApi } from "../../store/categories/action";
import { withRedux } from "../../hof/withRedux";
import NavBar from "../../components/NavBar";

export default function PricePage() {
  return (
    <>
      <NavBar />
      Prices
    </>
  );
}
export const getServerSideProps = withRedux(async ({ locale }, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));
  dispatch(setDefaultLanguage(locale));

  return { props: { ...(await serverSideTranslations(locale)) } };
});
