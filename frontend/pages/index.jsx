import { categoriesApi, useGetPopularServicesQuery } from "../store/categories/action";
import { withRedux } from "../hof/withRedux";
import { useState } from "react";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import Popular from "../components/Popular";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Main({ initialLanguage, isOpened, setIsOpened, setLanguage, language }) {
  const [test, setTest] = useState(initialLanguage);
  console.log(initialLanguage);

  const { data, error, isLoading } = useGetPopularServicesQuery(test);

  return (
    <>
      <select onChange={(e) => setTest(e.target.value)}>
        <option value='ru'>RU</option>
        <option value='en'>EN</option>
        <option value='ukr'>UA</option>
      </select>

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
