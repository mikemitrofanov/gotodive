import style from "../styles/header.module.css";
import MenuItem from "./MenuItem";

export default function MenuList(props) {
  const { title, items } = props;

  const renderList = () => {
    return items.map((item) => (
      <MenuItem>
       {item}
      </MenuItem>
    ));
  };

  return (
    <div className={` ${style.dropdown}`}>
      <div className={`${style.menu_list}`}>{title}</div>
      <div className={`max-lg:relative absolute lg:min-w-card max-lg:max-w-0  py:2  ${style.dropdown_content}`}>
        <div className={`max-lg:ml-2 ml-7 max-lg:p-2  whitespace-nowrap	   ${style.dropdown_content_list}`}>{renderList()}</div>
      </div>
    </div>
  );
}
// min-width: 410px;