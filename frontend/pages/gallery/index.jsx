import NavBar from "../../components/NavBar";
import { withRedux } from "../../hof/withRedux";

export default function Gallery({ isOpened, setIsOpened, setLanguage }) {
  return (
    <>
      <NavBar isOpened={isOpened} setIsOpened={setIsOpened} setLanguage={setLanguage} />
      Gallery
    </>
  );
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  return { props: {} };
});
