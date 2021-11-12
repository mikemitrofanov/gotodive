import { createSlice } from '@reduxjs/toolkit'

const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState: { isMenuOpened: false },
  reducers: {
    changeBurgerMenuState(state) {
      state.isMenuOpened = !state.isMenuOpened
    }
  },
})

export const { changeBurgerMenuState } = burgerMenuSlice.actions
export const burgerMenuState = state => state.burgerMenu.isMenuOpened
export default burgerMenuSlice.reducer
