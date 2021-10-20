import NavBar from "../../components/NavBar";
import { withRedux } from "../../hof/withRedux";

export default function Prices({ isOpened, setIsOpened, setLanguage }) {
  return (
    <>
      <NavBar isOpened={isOpened} setIsOpened={setIsOpened} setLanguage={setLanguage} />
      Prices
    </>
  );
}
export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  return { props: {} };
});
