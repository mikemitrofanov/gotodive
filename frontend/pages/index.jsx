import { useState } from "react";
import { categoriesApi } from "../store/categories/action";
import { withRedux } from "../hof/withRedux";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Team from "../components/Team";
import Contact from "../components/Contact";
import "../js/i18n";

export default function Main({ defaultLanguage, isOpened, setIsOpened }) {
  const [language, setLanguage] = useState(defaultLanguage);

  return (
    <>
      <NavBar isOpened={isOpened} setIsOpened={setIsOpened} setLanguage={setLanguage} language={language} />
      <SubHeader isOpened={isOpened} />
      <Popular language={language} />
      <Team />
      <Contact />
    </>
  );
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate("ru"));
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate("ru"));

  return { props: { defaultLanguage: "ru" } };
});
