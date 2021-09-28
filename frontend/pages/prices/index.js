import NavBar from "../../components/bloks/NavBar";
import {withRedux} from "../../hof/withRedux";

export default function Prices() {
    return (
        <div>
            <NavBar/>
            Prices
        </div>
    )
}
export const getServerSideProps = withRedux(async (ctx, dispatch) => {

    return {props: {}}
})