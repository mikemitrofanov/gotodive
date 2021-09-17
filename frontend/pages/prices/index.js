import TopNavBar from "../../components/topNavBar";
import {withRedux} from "../../hof/withRedux";
import {getCategoryServices} from "../../store/services/action";
import {getCategories} from "../../store/categories/action";
export default function Main() {
    return (<div>
        <TopNavBar/>
        Prices

    </div>)
}
export const getServerSideProps = withRedux(async (ctx, dispatch) => {
    await dispatch(getCategoryServices(1))
    await dispatch(getCategories())
    return {props: {}}
})