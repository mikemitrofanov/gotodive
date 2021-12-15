import styles from "../service.module.css";
import ImagesSlider from "./ImagesSlider";
import {useGetServicesQuery} from "../../../redux/slices/apiSlice";
import {useRouter} from "next/router";
import Images from "./Images";
import TextContent from "./TextContent";

export default function Content({id}) {
    const router = useRouter();
    const {data: service = {}} = useGetServicesQuery({language: router.locale, id});

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.block_right}>
                        <h2 className={styles.title}>{service.title}</h2>
                        <Images photos={service.photos}/>
                    </div>
                   <TextContent service={service}/>
                </div>
                <div className={styles.images_down}>
                    <Images photos={service.photos}/>
                </div>
                <ImagesSlider photos={service.photos}/>
            </div>
        </section>
    )
}
