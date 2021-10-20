import { categoriesApi, useGetServicesQuery } from "../store/categories/action";
import { useSelector } from "react-redux";
import { withRedux } from "../hof/withRedux";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Team from "../components/Team";
import Contact from "../components/Contact";

console.log(useGetServicesQuery); //undefined

export default function Main({ isOpened, setIsOpened, language, setLanguage }) {
  const { data: categories } = useSelector(categoriesApi.endpoints.getAllCategories.select());

  // const { data, error, isLoading } = useGetServicesQuery('ru')

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
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate());
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate({ test })); //test is not defined
  return { props: { test } };
});
