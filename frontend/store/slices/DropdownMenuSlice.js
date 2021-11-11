import {createSlice} from "@reduxjs/toolkit";

const DropdownMenuSlice = createSlice({
    name: 'dropdownMenu',
    initialState: {
      showDropdownItem:  []
    },
    reducers: {
        showMenu: (state, action) => {
            state.showDropdownItem = action.payload;
        }
    }
})

export const {showMenu} = DropdownMenuSlice.actions;
export const  showDropdownItem = state => state.dropdownMenu.showDropdownItem;
export default DropdownMenuSlice.reducer;
