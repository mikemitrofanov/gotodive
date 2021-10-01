import Link from "next/link";
import commonStyles from "../../../styles/common.module.css";

export default function CategoryServicesDropdown({ category, isOpened }) {
  return (
    <span
      className={`${
        isOpened ? commonStyles.dropdown_burger : commonStyles.dropdown
      }`}
    >
      <Link href='/'>
        <a
          className={`${
            isOpened
              ? commonStyles.main_nav_links_burger
              : commonStyles.main_nav_links
          }`}
        >
          {category.title}
        </a>
      </Link>
      <div
        className={`${
          isOpened
            ? commonStyles.dropdown_content_burger
            : commonStyles.dropdown_content
        }`}
      >
        {category.services?.map((service) => (
          <a
            key={service.title}
            href='#'
            className={`${
              isOpened
                ? commonStyles.dropdown_links_burger
                : commonStyles.dropdown_links
            }`}
          >
            {service.title}
          </a>
        ))}
      </div>
    </span>
  );
}
