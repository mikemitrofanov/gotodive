import styles from "./popular.module.css";
import {useTranslation} from "next-i18next";
import PopularCard from "./Items/PopularCard";
import PopularCardSlider from "./Items/PopularCardSlider";
import {useRouter} from "next/router";
import {useGetPopularServicesQuery} from "../../store/api/categories";

export default function Popular() {
    const router = useRouter();
    const {data: popular} = useGetPopularServicesQuery(router.locale);
    const {t} = useTranslation("common");

    return (
        <>
            {popular &&
            <section className={styles.background}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{t("popular.popular")}</h2>
                    <div className={styles.wrapper}>
                        {popular.map(item => (
                            <PopularCard
                                key={item.id}
                                src={item.imageUrl}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                        <PopularCardSlider/>
                    </div>
                </div>
            </section>
            }
        </>
    )
}
