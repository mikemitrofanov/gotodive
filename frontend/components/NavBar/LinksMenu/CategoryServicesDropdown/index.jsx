import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useGetAllCategoriesQuery } from "../../../../store/api/categories";
import { burgerMenuState } from "../../../../store/slices/burgerMenu";
import styles from "./categoryServicesDropdown.module.css";
import DropdownItems from "./DropdownItems";

export default function CategoryServicesDropdown() {
  const router = useRouter();
  const isBurgerMenuOpen = useSelector(burgerMenuState);
  const [showMenu, setShowMenu] = useState({ id: "" });
  const { data } = useGetAllCategoriesQuery(router.locale);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setShowMenu(event ? { id: event.target.id } : { id: "" });
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const changeStateShowMenu = (visible) => {
    setShowMenu(visible ? { id: visible.target.id } : { id: "" });
  };

  const doNotClose = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {data &&
        data.data.map((category) => (
          <span key={category.id} ref={ref} onClick={changeStateShowMenu} id={category.id} className={`ui selection dropdown ${Number(showMenu?.id) === Number(category.id) ? "visible active" : ""} ${isBurgerMenuOpen ? styles.dropdown_burger : styles.dropdown} ${Number(showMenu?.id) === Number(category.id) && styles.active_link_dropdown}`}>
            <span className={`text ${isBurgerMenuOpen ? styles.main_nav_links_burger : styles.main_nav_links}`}></span>
            {category.title}
            <FontAwesomeIcon className={`${Number(showMenu?.id) === Number(category.id) ? styles.active_arrows : styles.arrows} `} icon={faPlay} />
            <div onClick={doNotClose} className={`menu ${Number(showMenu?.id) === Number(category.id) ? "visible transition" : ""} ${isBurgerMenuOpen ? styles.wrapper_dropdown_burger : styles.wrapper_dropdown}`}>
              {category.services.map((dataDrodown) => (
                <DropdownItems key={dataDrodown.id} dataDrodown={dataDrodown} />
              ))}
            </div>
          </span>
        ))}
    </>
  );
}
