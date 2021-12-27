import styles from "../header.module.css";
import DropdownSubItem from "./dropdownSubItem";
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {openSubDropdown, openDropdownSubMenu} from "@/redux/slices/navbarSlice";

export default function SubcategoryMenu({category}) {
    const openedDropdownSubMenu = useSelector(openSubDropdown);
    const dispatch = useDispatch();

    const handleOnClickCategory = (e) => {
        e.stopPropagation()
        dispatch(openDropdownSubMenu(openedDropdownSubMenu.includes(e.target.id) ? [] : [e.target.id]));
    }

    const isOpenedDropdownSubMenu = openedDropdownSubMenu.includes(`${category.id}`);

    return (
        <div className={`${styles.dropdown_wrap,  styles.sub_menu}`}>
            <a key={category.id} id={category.id} onClick={handleOnClickCategory}
               className={`${styles.title} ${isOpenedDropdownSubMenu && styles.title_active}`}>
                {category.title}
            </a>
            <DropdownSubItem category={category}/>
        </div>
    )
}