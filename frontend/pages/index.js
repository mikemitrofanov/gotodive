import NavBar from "../components/bloks/NavBar";
import {withRedux} from "../hof/withRedux";
import Header from "../components/bloks/Header";
import Popular from "../components/bloks/Popular";
import {categoriesApi} from "../store/categories/action";
import Team from "../components/bloks/Team";
import Contact from "../components/bloks/Contact";

export default function Main() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Popular/>
            <Team/>
            <Contact/>
        </div>
    )
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
    await dispatch(categoriesApi.endpoints.getPopularServices.initiate())
    return {props: {}}
})