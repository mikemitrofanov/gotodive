import style from "../styles/header.module.css";


export default function MenuList({title,...rest}) {
    let values = Object.values(rest);
  return (
    <div className={`${style.dropdown}`}>
      <div className={`${style.menu_list}`}>{title}</div>
      <div className={`${style.dropdown_content}`}>
        <div className={`${style.dropdown_content_list}`}>
            {values.map(el => <a>{el}</a>)}
         
        </div>
      </div>
    </div>
  );
}
