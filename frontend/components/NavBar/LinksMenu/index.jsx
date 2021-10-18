import { useState } from "react";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import LinkMenu from "./LinkMenu";

export default function LinksMenu({ isOpened, categories }) {
  const [isOpenedDropdownDiving, setIsOpenedDropdownDiving] = useState(false);
  const [isOpenedDropdownSpecialization, setIsOpenedSpecialization] = useState(false);

  const [diving, specialization] = categories;

  const helperDiving = () => setIsOpenedDropdownDiving((setIsOpenedDropdownDiving) => !setIsOpenedDropdownDiving);
  const helperSpecialization = () => setIsOpenedSpecialization((setIsOpenedSpecialization) => !setIsOpenedSpecialization);

  const d = ["Дайвинг", "Дайвінг", "Diving"];
  const s = ["Специализации", "Спеціалізації", "Specializations"];

  const checkOpenDropdown = ({ event }) => {
    if (d.includes(event.target.innerText) && isOpenedDropdownSpecialization) {
      helperSpecialization();
    }

    if (d.includes(event.target.innerText)) {
      helperDiving();
    }

    if (s.includes(event.target.innerText) && isOpenedDropdownDiving) {
      helperDiving();
    }

    if (s.includes(event.target.innerText)) {
      helperSpecialization();
    }
  };

  return (
    <>
      <LinkMenu data_translate='_home' isOpened={isOpened} href='/' name='Главная' />
      <CategoryServicesDropdown data_translate='_diving' category={diving} style={isOpenedDropdownDiving} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} />
      <CategoryServicesDropdown data_translate='_specializations' category={specialization} style={isOpenedDropdownSpecialization} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} />
      <LinkMenu data_translate='_gallery' isOpened={isOpened} href='/gallery' name='Галерея' />
      <LinkMenu data_translate='_price' isOpened={isOpened} href='/prices' name='Прайс' />
    </>
  );
}
