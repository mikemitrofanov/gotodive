import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useGetAllCategoriesQuery} from "../../../../store/api/categories";
import {burgerMenuState} from "../../../../store/slices/burgerMenu";
import styles from "./DropdownMenu.module.css";
import DropdownItem from "./DropdownItem";
import {showDropdownItem, showMenu} from "../../../../store/slices/DropdownMenuSlice";

export default function DropdownMenu() {
    const router = useRouter();
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const showItem = useSelector(showDropdownItem);
    const {data: categories} = useGetAllCategoriesQuery(router.locale === 'uk' ? 'ukr': router.locale);
    const dispatch = useDispatch();

    const handleOnClickCategory = (e) => {
        e.stopPropagation()
        dispatch(showMenu(showItem.includes(e.target.id) ? [] : [e.target.id]));
    }

    return (
        <>
            {categories &&
            categories.map((category) => (
                <span
                    key={category.id}
                    id={category.id}
                    onClick={handleOnClickCategory}
                    className={
                        `${showItem.includes(`${category.id}`) && styles.active_link_dropdown} 
                      ${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`
                    }
                >
            {category.title}
                    <FontAwesomeIcon
                        icon={faPlay}
                        className={
                            `${showItem.includes(`${category.id}`)
                                ? styles.active_arrows
                                : styles.arrows}`
                        }
                    />
                    <DropdownItem
                        category={category}
                    />
          </span>
            ))}
        </>
    )
}
