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
    <header className={` max-md:w-1/2 h-auto  max-md:w-3/5  ${style.header_container}`}>
      <nav className={`max-lg:py-10 max-lg:px-12 ${style.wrapper_nav}`}>
        <ul className={" max-lg:flex-col flex justify-around"}>
          <div className={" max-lg:flex-col max-lg:w-11/12 flex justify-around w-1/3"}>
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
          <div className={"flex justify-start"}>
            <li className='max-lg:hidden'>
              <SearchInput />
            </li>
            <div className={"flex justify-evenly w-40"}>
              <li id={`${style.navigation}`}>RU</li>
              <li id={`${style.navigation}`}>UKR</li>
              <li id={`${style.navigation}`}>EN</li>
            </div>
            <li className='max-lg:hidden'>
              <Image src={login} alt="login icon" />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
