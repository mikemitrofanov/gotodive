import Modal from "@/components/shared/Modal";
import styles from "@/components/servicePage/servicePage.module.css";
import ContactForm from "@/components/shared/ContactForm";

export default function ModalForm({onClose, handleSubmit}) {

    return (
        <Modal onClose={onClose}>
            <div className={styles.wrap_modal}>
                <div className={styles.modal}
                     onClick={(e) => {
                         e.stopPropagation()
                     }}
                >
                    <ContactForm handleSubmit={handleSubmit}/>
                </div>
            </div>
        </Modal>
    )
}
