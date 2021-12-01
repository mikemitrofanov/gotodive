import MainScreen from "./items/MainScreen";
import Content from "./items/Content";

export default function Service({id}) {

    return (
        <>
            <MainScreen/>
            <Content id={id}/>
        </>
    )
}
