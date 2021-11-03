import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { categoriesApi } from "../../store/categories/action";
import { withRedux } from "../../hof/withRedux";
import NavBar from "../../components/NavBar";

export default function Price() {
  return (
    <>
      <NavBar />
      Prices
    </>
  );
}
export const getServerSideProps = withRedux(async ({ locale }, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));

  return { props: { ...(await serverSideTranslations(locale)) } };
});
