import styles from "../header.module.css";
import Modal from "@/components/shared/Modal";
import Navbar from "@/components/header/components/navbar";
import LanguageSwitchers from "@/components/header/components/languageSwitchers";

export default function ModalMenu({onOpen, categories}) {

    return (
        <Modal onClose={onOpen}>
            <div className={styles.modal_menu} onClick={(e) => e.stopPropagation()}>
                <Navbar categories={categories}/>
                <LanguageSwitchers/>
            </div>
        </Modal>
    )
}
