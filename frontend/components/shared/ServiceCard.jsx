import styles from "./styles/serviceCard.module.css";
import {useTranslation} from "next-i18next";
import Link from "@/components/shared/Link";
import Image from 'next/image';

export default function ServiceCard({src, title, description, id}) {
    const {t} = useTranslation("common");
    
    return (
        <div className={styles.card}>
            <Link href={{pathname: '/category/[service]', query: {service: id}}}>
                <div className={styles.image}>
                    <Image  alt='image' src={src} width={500} height={500}/>
                </div>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </Link>
            <a className={styles.button} href='#'>{t("popular.buttons")}</a>
        </div>
    )
}
