import { categoriesApi } from "../store/categories/action";
import { useSelector } from "react-redux";
import { useState } from "react";
import { withRedux } from "../hof/withRedux";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Main() {
  const { data: categories } = useSelector(categoriesApi.endpoints.getAllCategories.select());
  const [isOpened, setIsOpened] = useState(false);
  const [language, setLanguage] = useState("");

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
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate());
  return { props: {} };
});
