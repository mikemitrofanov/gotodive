import MainScreen from "./MainScreen";
import Content from "./Content";

export default function Service({id}) {

    return (
        <>
            <MainScreen/>
            <Content id={id}/>
        </>
    )
}
