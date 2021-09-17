import TopNavBar from "../../components/topNavBar";
export default function Main() {
    return (<div>
        <TopNavBar/>
        Gallery

    </div>)
}
export const getServerSideProps = () => {
    return {
     props:{}
    }
}