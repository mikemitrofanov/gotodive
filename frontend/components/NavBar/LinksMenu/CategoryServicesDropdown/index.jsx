import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useGetAllCategoriesQuery} from "../../../../store/api/categories";
import {burgerMenuState} from "../../../../store/slices/burgerMenu";
import styles from "./categoryServicesDropdown.module.css";
import DropdownItems from "./DropdownItems";
import {useOnClickOutside} from "../../../../hooks/useOnClickOutside";

export default function CategoryServicesDropdown() {
    const router = useRouter();
    const isBurgerMenuOpen = useSelector(burgerMenuState);
    const [showMenu, setShowMenu] = useState({id: ""});
    const {data: categories} = useGetAllCategoriesQuery(router.locale);

    useOnClickOutside(showMenu.id, () => setShowMenu({id: ""}))

    const handleOnClickCategory = (e) => {
        if (showMenu.id === e.target.id) {
            setShowMenu({id: ''})
            return
        }
        setShowMenu({id:e.target.id})
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
                        `${+showMenu.id === category.id && styles.active_link_dropdown} 
                      ${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`
                    }
                >
            {category.title}
                    <FontAwesomeIcon
                        icon={faPlay}
                        className={
                            `${+showMenu.id === category.id
                                ? styles.active_arrows
                                : styles.arrows}`
                        }
                    />
                    <DropdownItems
                        services={category.services}
                        activeItemId={+showMenu.id}
                        currentItemId={category.id}
                    />
          </span>
            ))}
        </>
    );
}
