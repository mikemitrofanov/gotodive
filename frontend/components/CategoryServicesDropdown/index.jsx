import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./categoryServicesDropdown.module.css";

export default function CategoryServicesDropdown({ isOpened, checkOpenDropdown, category, style }) {
  return (
    <span onClick={(event) => checkOpenDropdown({ event })} className={`${isOpened ? styles.dropdown_burger : styles.dropdown}`}>
      {category.title === "Дайвинг" && isOpened && <span>{style ? <FontAwesomeIcon className={styles.caret_down_burger_diving} icon={faCaretDown} /> : <FontAwesomeIcon className={styles.caret_right_burger_diving} icon={faCaretRight} />}</span>}
      {category.title === "Специализация" && isOpened && <span>{style ? <FontAwesomeIcon className={styles.caret_down_burger_specialization} icon={faCaretDown} /> : <FontAwesomeIcon className={styles.caret_right_burger_specialization} icon={faCaretRight} />}</span>}
      <span className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links} ${style && styles.active_link_dropdown}`}>{category.title}</span>
      <div className={`${isOpened ? styles.dropdown_content_burger : styles.dropdown_content} ${style && styles.noHidden}`}>
        {category.services?.map((service) => (
          <a key={service.title} href='#' className={`${isOpened ? styles.dropdown_links_burger : styles.dropdown_links}`}>
            {service.title}
          </a>
        ))}
      </div>
      {!isOpened && <span className={styles.wrapper_arrows}>{style ? <FontAwesomeIcon className={styles.caret_down} icon={faCaretDown} /> : <FontAwesomeIcon className={styles.caret_right} icon={faCaretRight} />}</span>}
    </span>
  );
}
