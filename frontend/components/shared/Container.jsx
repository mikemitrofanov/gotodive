import styles from "./styles/container.module.css";

export default function Container({children, background, ...props}) {

    return (
        <section className={background}>
            <div className={`${styles.container} ${props.container}`}>
                {children}
            </div>
        </section>
    )
}