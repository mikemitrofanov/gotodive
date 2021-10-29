import { useSelector, useDispatch } from "react-redux";
import { changeStateSpecializationsDropdownMenu, stateSpecializationsDropdownMenu } from "../../../../store/slice/specializationsDropdownMenu";
import { changeStateDivingDropdownMenu, stateDivingDropdownMenu } from "../../../../store/slice/divingDropdownMenu";
import { useGetAllCategoriesQuery } from "../../../../store/categories/action";
import { defaultLanguage } from "../../../../store/slice/defaultLanguageSlice";
import { fakeDataNavMenu } from "../../../../js/categoriesWithServices";
import Dropdown from "./Dropdown";

export default function CategoryServicesDropdown() {
  const isOpenSpecializationsDropdownMenu = useSelector(stateSpecializationsDropdownMenu);
  const isOpenDivingDropdownMenu = useSelector(stateDivingDropdownMenu);
  const language = useSelector(defaultLanguage);
  const { data } = useGetAllCategoriesQuery(language);
  const dropdown = data ? data : fakeDataNavMenu;
  const dataDropdownSpecializations = dropdown.data ? null : dropdown.dataSpecializations.specializations;
  const titleSpecializations = dropdown.data ? null : dropdown.dataSpecializations.titleSpecializations;
  const dataDropdownDiving = dropdown.data ? null : dropdown.dataDiving.diving;
  const titleDiving = dropdown.data ? null : dropdown.dataDiving.titleDiving;
  const dispatch = useDispatch();

  const changeTheStateOfTheDivingDropdownMenu = ({ event }) => {
    dispatch(changeStateDivingDropdownMenu());
    if (isOpenSpecializationsDropdownMenu && event) {
      dispatch(changeStateSpecializationsDropdownMenu());
    }
  };

  const changeTheStateOfTheSpecializationsDropdownMenu = ({ event }) => {
    dispatch(changeStateSpecializationsDropdownMenu());
    if (isOpenDivingDropdownMenu && event) {
      dispatch(changeStateDivingDropdownMenu());
    }
  };

  return (
    <>
      <Dropdown isOpenDropdownMenu={isOpenDivingDropdownMenu} changeTheStateDropdownMenu={changeTheStateOfTheDivingDropdownMenu} index={0} title={titleDiving} dataDropdown={dataDropdownDiving} dropdown={dropdown} />
      <Dropdown isOpenDropdownMenu={isOpenSpecializationsDropdownMenu} changeTheStateDropdownMenu={changeTheStateOfTheSpecializationsDropdownMenu} index={1} title={titleSpecializations} dataDropdown={dataDropdownSpecializations} dropdown={dropdown} />
    </>
  );
}
