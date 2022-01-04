import styles from "../header.module.css";
import DropdownItem from "./dropdownItem";
import DropdownSubItem from "./dropdownSubItem";
import {useDispatch, useSelector} from "react-redux";
import {openSubDropdown, openDropdownSubMenu, openDropdown, openDropdownMenu} from "@/redux/slices/navbarSlice";
import { useState } from "react";

export default function DropdownMenu({category, subcategory}) {
    const openedDropdownSubMenu = useSelector(openSubDropdown);
    const openedDropdownMenu = useSelector(openDropdown);
    const dispatch = useDispatch();

    const handleOnClickCategory = (e) => {
        e.stopPropagation()
        if(subcategory) {
            dispatch(openDropdownSubMenu(openedDropdownSubMenu.includes(e.target.id) ? [] : [e.target.id]));
        } else {
            dispatch(openDropdownMenu(openedDropdownMenu.includes(e.target.id) ? [] : [e.target.id]));
        }
    }

    const isOpenedDropdownSubMenu = openedDropdownSubMenu.includes(`${category.id}`);
    const isOpenedDropdownMenu = openedDropdownMenu.includes(`${category.id}`);

    return (
        <>
        {subcategory ?
            <div className={`${styles.dropdown_wrap,  styles.sub_menu}`}>
                <a key={category.id} id={category.id} onMouseOver={handleOnClickCategory}
                className={`${styles.title} ${isOpenedDropdownSubMenu && styles.title_active}`}>
                    {category.title}
                </a>
                <DropdownSubItem category={category}/>
            </div>
            :
            <div className={styles.dropdown_wrap}>
                <a key={category.id} id={category.id} onMouseOver={handleOnClickCategory}
                className={`${styles.title} ${isOpenedDropdownMenu && styles.title_active}`}>
                    {category.title}
                </a>
                <DropdownItem category={category}/>
            </div>
        }
        </>
    )
}