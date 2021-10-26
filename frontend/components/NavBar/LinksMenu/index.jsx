import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetAllCategoriesQuery } from "../../../store/categories/action";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import LinkMenu from "./LinkMenu";

export default function LinksMenu({ isOpened, categories, language,testData }) {
  const { t } = useTranslation("translation", { useSuspense: false });

  console.log(testData)
  // const { data } = useGetAllCategoriesQuery(language);
  // console.log(data)

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
      <LinkMenu isOpened={isOpened} href='/' name={t("navBar.home")} />
      <CategoryServicesDropdown data_translate='_diving' category={diving} style={isOpenedDropdownDiving} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} language={language} />
      <CategoryServicesDropdown data_translate='_specializations' category={specialization} style={isOpenedDropdownSpecialization} checkOpenDropdown={checkOpenDropdown} isOpened={isOpened} language={language} />
      <LinkMenu isOpened={isOpened} href='/gallery' name={t("navBar.gallery")} />
      <LinkMenu isOpened={isOpened} href='/prices' name={t("navBar.price")} />
    </>
  );
}
