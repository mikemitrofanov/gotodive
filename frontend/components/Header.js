import style from "../styles/header.module.css";
import SearchInput from "./SearchInput";

import Image from "next/image";

import login from "../public/images/header/login.png";
import MenuList from "./MenuList";

export default function Headers() {
  return (
    <header className={`${style.header_container}`}>
      <nav className={`${style.wrapper_nav}`}>
        <ul className={"flex justify-around"} >
          <div className={"flex justify-around w-2/5"}>
            <li>Главная</li>
            <li >
              <MenuList
                title={"Дайвинг"}
                params1={"Scuba diving"}
                params2={"Supervised Diver (Scuba Diver)"}
                params3={"Open Water Diver"}
              />
            </li>
            <li>
              <MenuList
                title={"Специализации"}
                params1={"Advanced Open Wawter Driver"}
                params2={"Recreational Trimix Driver"}
                params3={"Rescue Diver"}
                params4={"Elite Diver/MAster Diver"}
                params5={"Complex Navigation Diver"}
                params6={"Deep Diver"}
                params7={"Drift Diver"}
                params8={"Dry suit diverr"}
              />
            </li>
            <li id={`${style.navigation}`}>Галерея</li>
            <li id={`${style.navigation}`}>Прайс</li>
          </div>
          <div className={"flex justify-around w-2/5"}>
            <li>
              <SearchInput />
            </li>
            <div className={'flex justify-evenly w-40'}>
                <li id={`${style.navigation}`}>RU</li>
                <li id={`${style.navigation}`}>UKR</li>
                <li id={`${style.navigation}`}>EN</li>
            </div>
            <li>
              <Image src={login} alt="login icon" />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
