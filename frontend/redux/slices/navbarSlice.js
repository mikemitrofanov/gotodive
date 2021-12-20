import {createSlice} from "@reduxjs/toolkit";

const NavbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        openDropdown: [],
        isOpenBurgerMenu: false,
    },
    reducers: {
        openDropdownMenu: (state, action) => {
            state.openDropdown = action.payload;
        },
        openBurgerMenu: (state, action) => {
            state.isOpenBurgerMenu = action.payload;
        }
    }
})

export const {openDropdownMenu, openBurgerMenu} = NavbarSlice.actions;
export const openDropdown = state => state.navbar.openDropdown;
export const isOpenBurgerMenu = state => state.navbar.isOpenBurgerMenu;
export default NavbarSlice.reducer;
