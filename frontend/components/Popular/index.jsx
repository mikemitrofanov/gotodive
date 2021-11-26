import styles from "./popular.module.css";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useGetPopularServicesQuery} from "../../store/api/categories";
import PopularCard from "./ServiceShort";
import PopularCardSlider from "./Slider";

export default function Popular() {
    const router = useRouter();
    const {data: popular} = useGetPopularServicesQuery(router.locale);
    const {t} = useTranslation("common");

    return (

        <>
            {/*<section className={styles.popular_container}>*/}
            {/*    <div className={styles.popular_content_container}>*/}
            {/*        <div className={styles.popular_header}>{t("popular.popular")}</div>*/}
            {/*        <div className={styles.popular_items_container}>*/}
            {/*            <Media queries={{*/}
            {/*                small: "(max-width: 799px)",*/}
            {/*                medium: "(min-width: 800px) and (max-width: 1324px)",*/}
            {/*                large: "(min-width: 1325px)"*/}
            {/*            }}>*/}
            {/*                {(matches) => (*/}
            {/*                    <>*/}
            {/*                        {matches.small && <Slider numberOfSlides={1}/>}*/}
            {/*                        {matches.medium && <Slider numberOfSlides={2}/>}*/}
            {/*                        {matches.large && (*/}
            {/*                            <>*/}
            {/*                                {popular ? (*/}
            {/*                                    popular.map((service, index) => <ServiceShort key={index}*/}
            {/*                                                                                  src={service.imageUrl}*/}
            {/*                                                                                  title={service.title}*/}
            {/*                                                                                  description={service.description}/>)*/}
            {/*                                ) : (*/}
            {/*                                    <>*/}
            {/*                                        <ServiceShort src={image1.src}*/}
            {/*                                                      title={t("popular.recreationalCourses")}*/}
            {/*                                                      description={t("popular.description")}/>*/}
            {/*                                        <ServiceShort src={image2.src} title={t("popular.technicalCourses")}*/}
            {/*                                                      description={t("popular.description")}/>*/}
            {/*                                        <ServiceShort src={image3.src} title={t("popular.cave")}*/}
            {/*                                                      description={t("popular.description")}/>*/}
            {/*                                    </>*/}
            {/*                                )}*/}
            {/*                            </>*/}
            {/*                        )}*/}
            {/*                    </>*/}
            {/*                )}*/}
            {/*            </Media>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}


            <section className={styles.background}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{t("popular.popular")}</h2>
                    <div className={styles.wrapper}>

                        {popular && popular.map(service => (
                            <>
                                <PopularCardSlider key={service.id}
                                                   src={service.imageUrl}
                                                   title={service.title}
                                                   description={service.description}
                                />
                                <PopularCard key={service.id}
                                             src={service.imageUrl}
                                             title={service.title}
                                             description={service.description}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </section>


        </>

    )
}
