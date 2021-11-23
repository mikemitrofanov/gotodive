import styles from "./menuItem.module.css";
import Link from "next/link";

export default function MenuItem(props) {
    const {href, text, ...prop} = props;

    return (
        <Link href={href}>
            <a className={styles.link} {...prop}>
                {text}
            </a>
        </Link>
    )
}
