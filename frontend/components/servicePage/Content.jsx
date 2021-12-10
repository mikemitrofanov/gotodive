import styles from "./servicePage.module.css";
import Images from "./components/Images";
import TextContent from "./components/TextContent";
import Container from "@/components/shared/Container";

export default function Content({active, setActive, handleSubmit, service}) {

    return (
        <Container background={styles.background} container={styles.container}>
            <h2 className={styles.title}>{service.title}</h2>
            {service.photos && <Images photos={service.photos}/>}
            <TextContent service={service} setActive={setActive} active={active} handleSubmit={handleSubmit}/>
        </Container>
    )
}
