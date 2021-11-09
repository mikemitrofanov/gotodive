import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";
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
    const [isShow, setIsShow] = useState(false);
    const {data: categories} = useGetAllCategoriesQuery(router.locale);
    const ref = useRef();

    useOnClickOutside(ref, () => {
        setIsShow(!isShow)
    });

    const handleOnClickCategory = (e) => {
        if (showMenu.id === e.target.id) {
            setShowMenu({id: ''})
            return
        }

        setShowMenu({id: e.target.id})
        setIsShow(true)
    }

    const doNotClose = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            {categories &&
            categories.map(category => (
                <span
                    key={category.id}
                    id={category.id}
                    onClick={handleOnClickCategory}
                    className={
                        `${isShow && (Number(showMenu?.id) === Number(category.id)) && styles.active_link_dropdown} 
                    ${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`
                    }
                >
                    {category.title}
                    <FontAwesomeIcon
                        className={
                            `${isShow && (Number(showMenu?.id) === Number(category.id))
                                ? styles.active_arrows
                                : styles.arrows} `
                        }
                        icon={faPlay}
                    />
                    {isShow && (
                        <div
                            onClick={doNotClose}
                            ref={ref}
                            className={
                                `${Number(showMenu?.id) === Number(category.id)
                                    ? styles.active_dropdown_content
                                    : styles.dropdown_content} 
                                ${!isBurgerMenuOpen && styles.dropdown_content}`
                            }
                        >
                            {category.services.map((service) => (
                                <DropdownItems key={service.id} service={service}/>
                            ))}
                        </div>
                    )}
                </span>
            ))}
        </>
    )
}
