import styles from "../header.module.css";
import ModalMenu from "@/components/shared/header/components/modalMenu";

export default function Burger({isOpen, setIsOpen, categories}) {

    return (
        <>
            <div className={styles.burger} onClick={() => setIsOpen(true)}>
                <span className={styles.burger_line}/>
            </div>
            {isOpen && <ModalMenu onOpen={()=> setIsOpen(false)} categories={categories}/>}
        </>
    )
}
