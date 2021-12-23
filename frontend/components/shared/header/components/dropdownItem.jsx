import styles from "../header.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {openDropdown, openDropdownMenu} from "@/redux/slices/navbarSlice";

export default function DropdownItem({category}) {
    const [onClickService, SetOnClickService] = useState(null);
    const openedDropdownMenu = useSelector(openDropdown);
    const dispatch = useDispatch();
    useEffect(
        () => {
            const listener = (e) => {
                if (onClickService === e.target) {
                    return;
                }
                dispatch(openDropdownMenu([]));
            }
            document.addEventListener("click", listener);
            return () => {
                document.removeEventListener("click", listener);
            }
        }, [onClickService, dispatch]
    )

    const handleOnClickService = (e) => {
        e.stopPropagation()
        SetOnClickService(e.target)
    }

    const isOpenDropdownMenu = openedDropdownMenu.includes(`${category.id}`);

    return (
        <div onClick={handleOnClickService}
             className={`${isOpenDropdownMenu ? styles.dropdown_active : styles.dropdown}`}
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
