import NavBar from "../components/NavBar";
import HeaderBar from "../components/Header";
import Popular from "../components/Popular";
import { withRedux } from "../hof/withRedux";
import { categoriesApi } from "../store/categories/action";
import { useSelector } from "react-redux";

export default function Main() {
  const { data: categories } = useSelector(categoriesApi.endpoints.getAllCategories.select());

  return (
    <>
      <NavBar />
      <HeaderBar />
      <Popular />
    </>
  );
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate());
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate());
  return { props: {} };
});
