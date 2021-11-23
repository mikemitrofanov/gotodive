import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {burgerMenuState} from "../../../../store/slices/burgerMenu";
import styles from "./DropdownMenu.module.css";
import DropdownItem from "./DropdownItem";
import {showDropdownItem, showMenu} from "../../../../store/slices/DropdownMenuSlice";

export default function DropdownMenu({category}) {
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const showItem = useSelector(showDropdownItem);
    const dispatch = useDispatch();

    const handleOnClickCategory = (e) => {
        e.stopPropagation()
        dispatch(showMenu(showItem.includes(e.target.id) ? [] : [e.target.id]));
    }

    return (
        <>
            <span className={styles.wrap}>
               <a
                   key={category.id}
                   id={category.id}
                   onClick={handleOnClickCategory}
                   className={
                       `${styles.menu_item}
                    ${showItem.includes(`${category.id}`) && styles.active_link_dropdown} 
                      ${isBurgerMenuOpen && styles.main_nav_links_burger}`
                   }
               >
                {category.title}
            </a>
            <FontAwesomeIcon
                icon={faPlay}
                className={
                    `${showItem.includes(`${category.id}`)
                        ? styles.active_arrows
                        : styles.arrows}`
                }
            />
            </span>
            <DropdownItem category={category}/>
        </>
    )
}
