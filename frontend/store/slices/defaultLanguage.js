import { createSlice } from '@reduxjs/toolkit'

const defaultLanguageSlice = createSlice({
  name: 'defaultLanguage',
  initialState: { value: 'ru' },
  reducers: {
    setDefaultLanguage(state, action) {
      state.value = action.payload
    }
  },
})

export const { setDefaultLanguage } = defaultLanguageSlice.actions
export const defaultLanguage = state => state.language.value
export default defaultLanguageSlice.reducer
