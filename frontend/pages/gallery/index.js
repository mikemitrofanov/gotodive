import NavBar from "../../components/NavBar";
import {withRedux} from "../../hof/withRedux";

export default function Gallery() {
    return (
        <div>
            <NavBar/>
            Gallery
        </div>
    )
}
export const getServerSideProps = withRedux(async (ctx, dispatch) => {

    return {props: {}}
})