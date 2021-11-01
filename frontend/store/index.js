import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from 'react'
import defaultLanguageReducer from './slice/defaultLanguageSlice'
import statusBurgerMenuReducer from './slice/burgerMenuSlice'
import defaultLanguageReducer from './slices/defaultLanguage'
import statusBurgerMenuReducer from './slices/burgerMenu'
import statusMainMenuReducer from './slice/mainMenuSlice'
import statusMainMenuReducer from './slices/mainMenu'
import { categoriesApi } from "./categories/action";

let store
const initialState = {};

function initStore(preloadedState = initialState) {
    return configureStore({
        reducer: {
            [categoriesApi.reducerPath]: categoriesApi.reducer,
            statusMainMenu: statusMainMenuReducer,
            statusBurgerMenu: statusBurgerMenuReducer,
            language: defaultLanguageReducer,
        },
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
    })
}

export const initializeStore = (preloadedState) => {

    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
export function removeUndefined(state) {
    if (typeof state === 'undefined') return null
    if (Array.isArray(state)) return state.map(removeUndefined)
    if (typeof state === 'object' && state !== null) {
        return Object.entries(state).reduce((acc, [key, value]) => {
            return {
                ...acc,
                [key]: removeUndefined(value)
            }
        }, {})
    }

    return state
}