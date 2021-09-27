import {useSelector} from "react-redux";
import {categoriesApi} from "../store/categories/action";
import ServiceShort from "./items/ServiceShort";
import styles from '../styles/popular.module.css'

export default function Popular() {
    const {data} = useSelector(categoriesApi.endpoints.getPopularServices.select());
    const services = (Array.isArray(data)) ? data : [];

    return (
        <div className={styles.popular_container}>
            <div className={styles.popular_content_container}>
                <div className={styles.popular_header}>ПОПУЛЯРНОЕ</div>
                <div className={styles.popular_items_container}>
                    {services.map(service => <ServiceShort service={service} key={service.title}/>)}
                </div>
            </div>
        </div>
    )
}