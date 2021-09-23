import NavBar from "../components/NavBar";
import {withRedux} from "../hof/withRedux";
import Header from "../components/Header";

export default function Main() {
    return (
        <div>
            <NavBar/>
            <Header/>
        </div>
    )
}

export const getServerSideProps = withRedux(async (ctx, dispatch) => {
    return {props: {}}
})