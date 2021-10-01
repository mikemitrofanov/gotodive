import NavBar from "../components/NavBar";
import { withRedux } from "../hof/withRedux";
import { categoriesApi } from "../store/categories/action";
import { useSelector } from "react-redux";

export default function Main() {
  const { data: categories } = useSelector(
    categoriesApi.endpoints.getAllCategories.select()
  );

  return (
    <>
      <NavBar />
      Main
    </>
  );
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate());
  return { props: {} };
});