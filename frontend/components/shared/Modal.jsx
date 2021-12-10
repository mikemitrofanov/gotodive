import styles from "./styles/modal.module.css";

export default function Modal({onClose, children}) {

    return <div className={styles.blur} onClick={onClose}>{children}</div>
}
