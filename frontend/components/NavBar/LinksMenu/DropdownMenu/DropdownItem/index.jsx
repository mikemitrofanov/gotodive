import {useDispatch, useSelector} from "react-redux";
import {burgerMenuState} from "../../../../../store/slices/burgerMenu";
import styles from "./dropdownItem.module.css";
import {useEffect, useState} from "react";
import {showDropdownItem, showMenu} from "../../../../../store/slices/DropdownMenuSlice";

export default function DropdownItem({category, currentItemId}) {
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const [onClickService, SetOnClickService] = useState(null);
    const showItem = useSelector(showDropdownItem);
    const dispatch = useDispatch();

    useEffect(
        () => {
            const listener = (e) => {
                if (onClickService === e.target) {
                    return;
                }
                dispatch(showMenu([]));
            }
            document.addEventListener("click", listener);
            return () => {
                document.removeEventListener("click", listener);
            }
        }, [onClickService]
    );

    const handleOnClickService = (e) => {
        e.stopPropagation()
        SetOnClickService(e.target)
    }

    return (
        <>
            <div

                className={
                    `${showItem.includes(`${currentItemId}`)
                        ? styles.active_dropdown_content
                        : styles.dropdown_content}
                         ${!isBurgerMenuOpen && styles.dropdown_content}`
                }
            >
                {category.services.map((service) => (
                    <a
                        onClick={handleOnClickService}
                        key={service.id}
                        id={service.id}
                        href='#'
                        className={`${isBurgerMenuOpen ? styles.dropdown_links_burger : styles.dropdown_links}`}
                    >
                        {service.title}
                    </a>
                ))}
            </div>
        </>
    )
}
