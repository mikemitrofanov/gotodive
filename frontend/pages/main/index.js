import TopNavBar from "../../components/topNavBar";
import {withRedux} from "../../hof/withRedux";
import {categoriesApi} from "../../store/categories/action";
import {useSelector} from "react-redux";

export default function Main() {

    const {data: categories} = useSelector(categoriesApi.endpoints.getAllCategories.select());
    console.log(categories)

    return (<div>
        <TopNavBar/>
        Main

    </div>)
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
    await dispatch(categoriesApi.endpoints.getAllCategories.initiate())
    return {props: {}}
})