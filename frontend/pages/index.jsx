import { categoriesApi, useGetPopularServicesQuery } from "../store/categories/action";
import { withRedux } from "../hof/withRedux";
import { useState } from "react";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Main({ initialLanguage, isOpened, setIsOpened }) {
  const [language, setLanguage] = useState(initialLanguage);
  const { data } = useGetPopularServicesQuery(language);

  return (
    <>
      {JSON.stringify(data)}

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
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate("ru"));

  return { props: { initialLanguage: "ru" } };
});
