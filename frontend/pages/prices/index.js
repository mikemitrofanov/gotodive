import TopNavBar from "../../components/topNavBar";
import {withRedux} from "../../hof/withRedux";

export default function Main() {
    return (<div>
        <TopNavBar/>
        Prices

    </div>)
}
export const getServerSideProps = withRedux(async (ctx, dispatch) => {

    return {props: {}}
})