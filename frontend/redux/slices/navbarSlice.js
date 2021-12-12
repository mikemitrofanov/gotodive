import {createSlice} from "@reduxjs/toolkit";

const NavbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        openDropdown: [],
    },
    reducers: {
        openDropdownMenu: (state, action) => {
            state.openDropdown = action.payload;
        }
    }
})

export const {openDropdownMenu} = NavbarSlice.actions;
export const openDropdown = state => state.navbar.openDropdown;
export default NavbarSlice.reducer;
