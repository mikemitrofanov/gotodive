import {useSelector} from "react-redux";
import {categoriesApi} from "../store/categories/action";
import ServiceShort from "./items/ServiceShort";

export default function Popular() {
    const {data: data} = useSelector(categoriesApi.endpoints.getPopularServices.select());
    const services = (Array.isArray(data)) ? data : [];

    return (
        <div className='popular-container'>
            <div className='popular-content-container'>
                <div className='popular-header'>ПОПУЛЯРНОЕ</div>
                <div className='popular-items-container'>
                    {services.map(service => <ServiceShort service={service} key={service.title}/>)}
                </div>
            </div>
        </div>
    )
}