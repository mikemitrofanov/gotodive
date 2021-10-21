import { useState } from "react";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import LinkMenu from "./LinkMenu";

export default function LinksMenu({ isOpened, categories }) {
  const [isOpenedDropdownDiving, setIsOpenedDropdownDiving] = useState(false);
  const [isOpenedDropdownSpecialization, setIsOpenedSpecialization] = useState(false);

  const [diving, specialization] = categories;

  const divingVariations = ["Дайвинг", "Дайвінг", "Diving"];
  const specializationsVariations = ["Специализации", "Спеціалізації", "Specializations"];

  const checkOpenDropdown = ({ event }) => {
    if ((divingVariations.includes(event.target.innerText) && isOpenedDropdownSpecialization) || specializationsVariations.includes(event.target.innerText)) {
      setIsOpenedSpecialization((setIsOpenedSpecialization) => !setIsOpenedSpecialization);
    }

    if ((specializationsVariations.includes(event.target.innerText) && isOpenedDropdownDiving) || divingVariations.includes(event.target.innerText)) {
      setIsOpenedDropdownDiving((setIsOpenedDropdownDiving) => !setIsOpenedDropdownDiving);
    }
  };

  return (
    <>
      <LinkMenu data_translate='_home' isOpened={isOpened} href='/' name='Главная' />
      <CategoryServicesDropdown data_translate='_diving' category={diving} style={isOpenedDropdownDiving} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} />
      <CategoryServicesDropdown data_translate='_specializations' category={specialization} style={isOpenedDropdownSpecialization} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} />
      <LinkMenu data_translate='_gallery' isOpened={isOpened} href='/[language]/gallery' name='Галерея' />
      <LinkMenu data_translate='_price' isOpened={isOpened} href='/[language]/prices' name='Прайс' />
    </>
  );
}
