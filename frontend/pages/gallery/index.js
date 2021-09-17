import TopNavBar from "../../components/topNavBar";
import {getCategoryServices} from "../../store/services/action";
import {getCategories} from "../../store/categories/action";
import {withRedux} from "../../hof/withRedux";
export default function Main() {
    return (<div>
        <TopNavBar/>
        Gallery

    </div>)
}
export const getServerSideProps = withRedux(async (ctx, dispatch) => {
    await dispatch(getCategoryServices(1))
    await dispatch(getCategories())
    return {props: {}}
})