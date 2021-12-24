import styles from "./styles/popular.module.css";
import ServiceCardSlider from "./components/ServiceCardSlider";
import Container from "@/components/shared/Container";
import ListServiceCards from "@/components/shared/ListServiceCards";
import ModalForm from "@/components/servicePage/components/ModalForm";
import { useState } from "react";

export default function Popular({title, popular, active, setActive, onSubmit}) {
    const [serviceId, setServiceId] = useState('');

    const handleSubmit = (content) => {
        onSubmit(content, serviceId)
    }

    const hendleOpenModalForm = (id) => {
        setServiceId(id)
        setActive(true)
    }

    return (
        <Container background={styles.background} container={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.wrapper}>
                <div className={styles.cards}>
                    <ListServiceCards listServices={popular} onActive={hendleOpenModalForm} />
                </div>
                <ServiceCardSlider listServices={popular}/>
            </div>
            {active && <ModalForm onClose={() => setActive(false)} setActive={setActive} handleSubmit={handleSubmit}/>}
        </Container>
    )
}
