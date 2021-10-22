import { categoriesApi, useGetPopularServicesQuery } from "../store/categories/action";
import { withRedux } from "../hof/withRedux";
import { useState } from "react";

export default function Main({ initialLanguage }) {
  const [language, setLanguage] = useState(initialLanguage);

  const { data, error, isLoading } = useGetPopularServicesQuery(language);

  return (
    <>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value='ru'>RU</option>
        <option value='en'>EN</option>
        <option value='ukr'>UA</option>
      </select>

      {JSON.stringify(data)}

      {/*<NavBar isOpened={isOpened} setIsOpened={setIsOpened} setLanguage={setLanguage} />*/}
      {/*<SubHeader isOpened={isOpened} />*/}
      {/*<Popular language={language} />*/}
      {/*<Team />*/}
      {/*<Contact />*/}
    </>
  );
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate());
  await dispatch(categoriesApi.endpoints.getPopularServices.initiate("ru"));

  return { props: { initialLanguage: "ru" } };
});
