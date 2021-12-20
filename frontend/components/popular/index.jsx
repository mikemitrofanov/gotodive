import styles from "./popular.module.css";
import {useTranslation} from "next-i18next";
import PopularCard from "./items/PopularCard";
import PopularCardSlider from "./items/PopularCardSlider";
import {useRouter} from "next/router";
import {useGetPopularServicesQuery} from "@/redux/slices/apiSlice";

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
                                src={`${process.env.NEXT_PUBLIC_URL}/${item.photos[0].photo_url}`}
                                title={item.title}
                                description={item.description}
                                id={item.id}
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
