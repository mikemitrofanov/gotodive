import style from "../styles/header.module.css";
import SearchInput from "./SearchInput";

import Image from "next/image";

import login from "../public/images/header/login.png";
import MenuList from "./MenuList";

export default function Headers() {
  let special = [
    "Advanced Open Wawter Driver",
    "Recreational Trimix Driver",
    "Rescue Diver",
    "Elite Diver/MAster Diver",
    "Complex Navigation Diver",
    "Deep Diver",
    "Drift Diver",
    "Dry suit diver",
  ];

  const daivingList = [
    "Scuba diving",
    "Supervised Diver (Scuba Diver)",
    "Open Water Diver",
  ];

  return (
    <header className={`${style.header_container}`}>
      <nav className={`${style.wrapper_nav}`}>
        <ul className={"flex justify-around"}>
          <div className={"flex justify-around w-1/3"}>
            <li>Главная</li>
            <li>
              <MenuList title={"Дайвинг"} items={daivingList} />
            </li>
            <li>
              <MenuList title={"Специализации"} items={special} />
            </li>
            <li id={`${style.navigation}`}>Галерея</li>
            <li id={`${style.navigation}`}>Прайс</li>
          </div>
          <div className={"flex justify-around"}>
            <li>
              <SearchInput />
            </li>
            <div className={"flex justify-evenly w-40"}>
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
