import { useSelector, useDispatch } from "react-redux";
import { changeStateSpecializationsDropdownMenu, stateSpecializationsDropdownMenu } from "../../../../store/slice/specializationsDropdownMenu";
import { changeStateDivingDropdownMenu, stateDivingDropdownMenu } from "../../../../store/slice/divingDropdownMenu";
import Dropdown from "./Dropdown";

export default function CategoryServicesDropdown() {
  const isOpenSpecializationsDropdownMenu = useSelector(stateSpecializationsDropdownMenu);
  const isOpenDivingDropdownMenu = useSelector(stateDivingDropdownMenu);
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
      <Dropdown isOpenDropdownMenu={isOpenDivingDropdownMenu} changeTheStateDropdownMenu={changeTheStateOfTheDivingDropdownMenu} index={0} />
      <Dropdown isOpenDropdownMenu={isOpenSpecializationsDropdownMenu} changeTheStateDropdownMenu={changeTheStateOfTheSpecializationsDropdownMenu} index={1} />
    </>
  );
}
