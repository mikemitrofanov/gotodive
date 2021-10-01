import { useState } from "react";
import Link from "next/link";
import commonStyles from "../../../styles/common.module.css";

export default function CategoryServicesDropdown({ category, isOpened }) {
  const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

  const openDropdown = () => {
    setIsOpenedDropdown((isOpenedDropdown) => !isOpenedDropdown);
  };

  return (
    <span
      onClick={openDropdown}
      className={`${isOpened ? commonStyles.dropdown_burger : commonStyles.dropdown } `}>
      <Link href='/'>
        <a className={`${isOpened ? commonStyles.main_nav_links_burger : commonStyles.main_nav_links} ${isOpenedDropdown && commonStyles.active_link_dropdown}`}> {category.title} </a>
      </Link>
      <div
        className={`${isOpened ? commonStyles.dropdown_content_burger : commonStyles.dropdown_content} ${isOpenedDropdown && commonStyles.noHidden}`}>
        {category.services?.map((service) => (
          <a key={service.title} href='#'
            className={`${ isOpened ? commonStyles.dropdown_links_burger : commonStyles.dropdown_links}`}>
            {service.title}
          </a>
        ))}
      </div>
    </span>
  );
}
