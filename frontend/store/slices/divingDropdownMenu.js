import { createSlice } from '@reduxjs/toolkit'

const statusDivingDropdownMenu = createSlice({
  name: 'isTheDivingDropdownOpen',
  initialState: { value: false },
  reducers: {
    changeStateDivingDropdownMenu(state) {
      state.value = !state.value
    }
  },
})

export const { changeStateDivingDropdownMenu } = statusDivingDropdownMenu.actions
export const stateDivingDropdownMenu = state => state.statusDivingDropdownMenu.value
export default statusDivingDropdownMenu.reducer
