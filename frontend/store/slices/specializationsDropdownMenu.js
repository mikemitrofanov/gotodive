import { createSlice } from '@reduxjs/toolkit'

const statusSpecializationsDropdownMenu = createSlice({
  name: 'isTheSpecializationsDropdownOpen',
  initialState: { value: false },
  reducers: {
    changeStateSpecializationsDropdownMenu(state) {
      state.value = !state.value
    }
  },
})

export const { changeStateSpecializationsDropdownMenu } = statusSpecializationsDropdownMenu.actions
export const stateSpecializationsDropdownMenu = state => state.statusSpecializationsDropdownMenu.value
export default statusSpecializationsDropdownMenu.reducer
