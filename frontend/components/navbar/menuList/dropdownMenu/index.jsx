import styles from "./dropdownMenu.module.css";
import DropdownItem from "./dropdownItem";
import {useDispatch, useSelector} from "react-redux";
import {openDropdown, openDropdownMenu} from "../../../../redux/slices/navbarSlice";

export default function DropdownMenu({category}) {
    const openedDropdownMenu = useSelector(openDropdown);
    const dispatch = useDispatch();

    const handleOnClickCategory = (e) => {
        e.stopPropagation()
        dispatch(openDropdownMenu(openedDropdownMenu.includes(e.target.id) ? [] : [e.target.id]));
    }

    const isOpenedDropdownMenu = openedDropdownMenu.includes(`${category.id}`);

    return (
        <div className={styles.wrapper}>
            <a key={category.id} id={category.id} onClick={handleOnClickCategory}
               className={`${styles.menu_item} ${isOpenedDropdownMenu && styles.menu_item_active}`}>
                {category.title}
            </a>
            <DropdownItem category={category}/>
        </div>
    )
}
