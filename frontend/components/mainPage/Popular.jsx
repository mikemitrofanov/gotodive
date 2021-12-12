import styles from "./styles/popular.module.css";
import ServiceCardSlider from "./components/ServiceCardSlider";
import Container from "@/components/shared/Container";
import ListServiceCards from "@/components/shared/ListServiceCards";

export default function Popular({title, popular}) {

    return (
        <Container background={styles.background} container={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.wrapper}>
                <div className={styles.cards}>
                    <ListServiceCards listServices={popular}/>
                </div>
                <ServiceCardSlider listServices={popular}/>
            </div>
        </Container>
    )
}
