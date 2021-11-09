import {useSelector} from "react-redux";
import {burgerMenuState} from "../../../../../store/slices/burgerMenu";
import styles from "./dropdownItems.module.css";

export default function DropdownItems({services, activeItemId, currentItemId}) {
    const isBurgerMenuOpen = useSelector(burgerMenuState);

    return (
        <>
            <div
                className={
                    `${activeItemId === currentItemId
                        ? styles.active_dropdown_content
                        : styles.dropdown_content}
                         ${!isBurgerMenuOpen && styles.dropdown_content}`
                }
            >
                {services.map((service) => (
                    <a
                        key={service.id}
                        href='#'
                        className={`${isBurgerMenuOpen ? styles.dropdown_links_burger : styles.dropdown_links}`}
                    >
                        {service.title}
                    </a>
                ))}
            </div>
        </>
    );
}
