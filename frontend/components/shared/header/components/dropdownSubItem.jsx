import styles from "../header.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {openSubDropdown, openDropdownSubMenu} from "@/redux/slices/navbarSlice";

export default function DropdownItem({category}) {
    const [onClickService, SetOnClickService] = useState(null);
    const openedDropdownSubMenu = useSelector(openSubDropdown);
    const dispatch = useDispatch();
    useEffect(
        () => {
            const listener = (e) => {
                if (onClickService === e.target) {
                    return;
                }
                dispatch(openDropdownSubMenu([]));
            }
            document.addEventListener("click", listener);
            return () => {
                document.removeEventListener("click", listener);
            }
        }, [onClickService]
    )

    const handleOnClickService = (e) => {
        e.stopPropagation()
        SetOnClickService(e.target)
    }

    const isOpenDropdownSubMenu = openedDropdownSubMenu.includes(`${category.id}`);

    return (
        <div onClick={handleOnClickService}
             className={`${isOpenDropdownSubMenu ? styles.dropdown_active_sub_menu : styles.dropdown}`}
        >
            {category.services.map(service => (
                <Link
                    key={service.id}
                    href={{pathname: '/category/[service]', query: {service: service.id}}}
                >
                    <a id={service.id} className={styles.subtitle}>
                        {service.title}
                    </a>
                </Link>
            ))}
        </div>
    )
}
