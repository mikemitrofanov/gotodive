import {createSlice} from "@reduxjs/toolkit";

const DropdownMenuSlice = createSlice({
    name: 'dropdownMenu',
    initialState: {
      openDropdown:  []
    },
    reducers: {
        showMenu: (state, action) => {
            state.openDropdown = action.payload;
        }
    }
})

export const {showMenu} = DropdownMenuSlice.actions;
export const  openDropdown = state => state.dropdownMenu.openDropdown;
export default DropdownMenuSlice.reducer;
