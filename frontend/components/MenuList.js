import style from "../styles/header.module.css";
import MenuItem from "./MenuItem";

export default function MenuList(props) {
  const { title, items } = props;

  const renderList = () => {
    return items.map((item) => <MenuItem item={item} />);
  };

  return (
    <div className={`${style.dropdown}`}>
      <div className={`${style.menu_list}`}>{title}</div>
      <div className={`${style.dropdown_content}`}>
        <div className={`${style.dropdown_content_list}`}>{renderList()}</div>
      </div>
    </div>
  );
}
