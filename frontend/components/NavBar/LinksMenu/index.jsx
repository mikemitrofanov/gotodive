import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeStateDivingDropdownMenu, stateDivingDropdownMenu } from "../../../store/slice/divingDropdownMenu";
import { changeStateSpecializationsDropdownMenu, stateSpecializationsDropdownMenu } from "../../../store/slice/specializationsDropdownMenu";
import { defaultLanguage } from "../../../store/slice/defaultLanguageSlice";
import { useGetAllCategoriesQuery } from "../../../store/categories/action";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import LinkMenu from "./LinkMenu";

export default function LinksMenu({ categories }) {
  const { t } = useTranslation("translation", { useSuspense: false });
  const isOpenDivingDropdownMenu = useSelector(stateDivingDropdownMenu);
  const isOpenSpecializationsDropdownMenu = useSelector(stateSpecializationsDropdownMenu);
  const dispatch = useDispatch();
  const language = useSelector(defaultLanguage);

  const { data } = useGetAllCategoriesQuery(language);
  console.log(data);

  const [diving, specialization] = categories;

  // const divingVariations = ["Дайвинг", "Дайвінг", "Diving"];
  // const specializationsVariations = ["Специализации", "Спеціалізації", "Specializations"];

  const changeStateDivingDropdownMenu = () => {
    console.log("hcdsjskd");
    dispatch(changeStateDivingDropdownMenu());
  };

  const changeStateSpecializationsDropdownMenu = () => {
    dispatch(changeStateSpecializationsDropdownMenu());
  };

  const checkOpenDropdown = ({ event }) => {
    console.log(event);
    // if ((divingVariations.includes(event.target.innerText) && isOpenedDropdownSpecialization) || specializationsVariations.includes(event.target.innerText)) {
    //   setIsOpenedSpecialization((setIsOpenedSpecialization) => !setIsOpenedSpecialization);
    // }
    // if ((specializationsVariations.includes(event.target.innerText) && isOpenedDropdownDiving) || divingVariations.includes(event.target.innerText)) {
    //   setIsOpenedDropdownDiving((setIsOpenedDropdownDiving) => !setIsOpenedDropdownDiving);
    // }
  };

  return (
    <>
      <LinkMenu href='/' name={t("navBar.home")} />
      <CategoryServicesDropdown onClick={() => changeStateDivingDropdownMenu()} category={diving} style={isOpenDivingDropdownMenu} language={language} />
      <CategoryServicesDropdown onClick={changeStateSpecializationsDropdownMenu} category={specialization} style={isOpenSpecializationsDropdownMenu} language={language} />
      <LinkMenu href='/gallery' name={t("navBar.gallery")} />
      <LinkMenu href='/prices' name={t("navBar.price")} />
    </>
  );
}
