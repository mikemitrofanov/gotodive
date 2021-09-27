import NavBar from "../components/NavBar";
import {withRedux} from "../hof/withRedux";
import Header from "../components/Header";
import Popular from "../components/Popular";
import {categoriesApi} from "../store/categories/action";
import Team from "../components/Team";

export default function Main() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Popular/>
            <Team/>
        </div>
    )
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
    await dispatch(categoriesApi.endpoints.getPopularServices.initiate())
    return {props: {}}
})