import NavBar from "../../components/NavBar";
import { withRedux } from "../../hof/withRedux";

export default function Prices() {
  return (
    <>
      <NavBar />
      Prices
    </>
  );
}
export const getServerSideProps = withRedux(async (ctx, dispatch) => {
  return { props: {} };
});
