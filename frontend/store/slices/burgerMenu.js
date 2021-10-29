import { createSlice } from '@reduxjs/toolkit'

const statusBurgerMenuSlice = createSlice({
  name: 'isTheBurgerMenuOpen',
  initialState: { value: false },
  reducers: {
    changeStateBurgerMenu(state) {
      state.value = !state.value
    }
  },
})

export const { changeStateBurgerMenu } = statusBurgerMenuSlice.actions
export const stateBurgerMenu = state => state.statusBurgerMenu.value
export default statusBurgerMenuSlice.reducer
