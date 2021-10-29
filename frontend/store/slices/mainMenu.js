import { createSlice } from '@reduxjs/toolkit'

const statusMainMenuSlice = createSlice({
  name: 'isTheMainMenuOpen',
  initialState: { value: true },
  reducers: {
    changeStateMainMenu(state) {
      state.value = !state.value
    }
  },
})

export const { changeStateMainMenu } = statusMainMenuSlice.actions
export const stateMainMenu = state => state.statusMainMenu.value
export default statusMainMenuSlice.reducer
