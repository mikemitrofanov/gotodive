export const openBurgerMenuAndCloseMainHead = ({ event, setIsOpened, setIsOpenedMainHeader }) => {
  if (
    event.target.innerHTML === "Дайвинг" ||
    event.target.innerHTML === "Специализация"
  ) {
    event.preventDefault();
    return;
  }
  setIsOpenedMainHeader((isOpenedMainHeader) => !isOpenedMainHeader);
  setIsOpened((isOpened) => !isOpened);
};