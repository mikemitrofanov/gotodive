import {createSlice} from "@reduxjs/toolkit";

const NavbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        openDropdown: [],
        openSubDropdown: [],
        isOpenBurgerMenu: false,
    },
    reducers: {
        openDropdownMenu: (state, action) => {
            state.openDropdown = action.payload;
        },
        openDropdownSubMenu: (state, action) => {
            state.openSubDropdown = action.payload;
        },
        openBurgerMenu: (state, action) => {
            state.isOpenBurgerMenu = action.payload;
        }
    }
})

export const {openDropdownMenu, openBurgerMenu, openDropdownSubMenu} = NavbarSlice.actions;
export const openDropdown = state => state.navbar.openDropdown;
export const openSubDropdown = state => state.navbar.openSubDropdown;
export const isOpenBurgerMenu = state => state.navbar.isOpenBurgerMenu;
export default NavbarSlice.reducer;
