import styles from "./styles/serviceCard.module.css";
import {useTranslation} from "next-i18next";
import Link from "@/components/shared/Link";
import Image from 'next/image';

export default function ServiceCard({src, title, description, id, onActive  }) {
    const {t} = useTranslation("common");
    return (
        <div className={styles.card}>
            <Link href={{pathname: '/category/[service]', query: {service: id}}}>
                <div className={styles.image}>
                    <Image layout="fill" alt='image' src={src} />
                </div>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </Link>
            <button className={styles.button} onClick={()=>onActive(id)}>{t("popular.buttons")}</button>
        </div>
    )
}
