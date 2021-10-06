import { useState } from "react";
import CategoryServicesDropdown from "../CategoryServicesDropdown";
import LinkMenu from "../LinkMenu";

export default function LinksMenu({ isOpened, categories }) {
  const [isOpenedDropdownDiving, setIsOpenedDropdownDiving] = useState(false);
  const [isOpenedDropdownSpecialization, setIsOpenedSpecialization] = useState(false);

  const [diving, specialization] = categories;

  const helperDiving = () => setIsOpenedDropdownDiving((setIsOpenedDropdownDiving) => !setIsOpenedDropdownDiving);
  const helperSpecialization = () => setIsOpenedSpecialization((setIsOpenedSpecialization) => !setIsOpenedSpecialization);

  const checkOpenDropdown = ({ event }) => {
    if (event.target.innerText === "Дайвинг" && isOpenedDropdownSpecialization) {
      helperSpecialization();
    }

    if (event.target.innerText === "Дайвинг") {
      helperDiving();
    }

    if (event.target.innerText === "Специализация" && isOpenedDropdownDiving) {
      helperDiving();
    }

    if (event.target.innerText === "Специализация") {
      helperSpecialization();
    }
  };

  return (
    <>
      <LinkMenu isOpened={isOpened} href='/' name='Главная' />
      <CategoryServicesDropdown category={diving} style={isOpenedDropdownDiving} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} />
      <CategoryServicesDropdown category={specialization} style={isOpenedDropdownSpecialization} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} />
      <LinkMenu isOpened={isOpened} href='/gallery' name='Галерея' />
      <LinkMenu isOpened={isOpened} href='/prices' name='Прайс' />
    </>
  );
}
