import { categoriesApi, useGetPopularServicesQuery } from "../store/categories/action";
import { initializeStore, removeUndefined } from "../store";
import { useSelector } from "react-redux";
import { withRedux } from "../hof/withRedux";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Main({ isOpened, setIsOpened, language, setLanguage }) {

  // console.log(JSON.stringify(data.categoriesApi.queries));

  const { data, error, isLoading } = useGetPopularServicesQuery(language);

  console.log({
    data,
    error,
    isLoading,
  });



  return (
    <>
      <NavBar isOpened={isOpened} setIsOpened={setIsOpened} setLanguage={setLanguage} />
      <SubHeader isOpened={isOpened} />
      <Popular language={language} />
      <Team />
      <Contact />
    </>
  );
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  // const { data: categories } = useSelector(categoriesApi.endpoints.getAllCategories.select());
  // const { data, error, isLoading } = useGetPopularServicesQuery("ru");
  const store = initializeStore();
  await store.dispatch(categoriesApi.endpoints.getAllCategories.initiate());
  await store.dispatch(categoriesApi.endpoints.getPopularServices.initiate("ru"));

  return { props: {} };
});
