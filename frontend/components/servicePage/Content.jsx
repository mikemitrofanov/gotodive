import styles from "./servicePage.module.css";
import container_styles from "@/components/shared/styles/container.module.css";
import Images from "./components/Images";
import TextContent from "./components/TextContent";
import Container from "@/components/shared/Container";
import Slider from "@/components/servicePage/components/Slider";

export default function Content({active, setActive, handleSubmit, service}) {

    return (
        <Container background={styles.background} container={container_styles.container + ' ' + styles.flex}>
            <div>
                <h2 className={styles.title}>{service.title}</h2>
                <Images photos={service.photos}/>
            </div>
            <TextContent service={service} setActive={setActive} active={active} onSubmit={handleSubmit}/>
            <Slider  photos={service.photos}/>
        </Container>
    )
}
