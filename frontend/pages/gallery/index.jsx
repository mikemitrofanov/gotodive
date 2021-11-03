import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Media from "react-media";
import { setDefaultLanguage } from "../../store/slices/defaultLanguage";
import { categoriesApi } from "../../store/categories/action";
import { withRedux } from "../../hof/withRedux";
import Gallery from "../../components/Gallery";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function GalleryPage() {
  return (
    <>
      <NavBar />
      <Media queries={{ medium: "(max-width: 1324px)" }}>
        {(matches) =>
          matches.medium ? (
            <>
              <Gallery />
              <Gallery />
            </>
          ) : (
            <Gallery />
          )
        }
      </Media>
      <Footer />
    </>
  );
}

export const getServerSideProps = withRedux(async ({ locale }, dispatch) => {
  await dispatch(categoriesApi.endpoints.getAllCategories.initiate(locale));
  dispatch(setDefaultLanguage(locale));

  return { props: { ...(await serverSideTranslations(locale)) } };
});
