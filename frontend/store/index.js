import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {useMemo} from 'react'
import {handleRequests} from "@redux-requests/core";
import {createDriver} from "@redux-requests/axios";
import {axiosApi} from "../libs/axiosApi";

let index

export const initializeStore = (preloadedState = undefined) => {

    const {requestsReducer, requestsMiddleware, requestsPromise} = handleRequests({
        driver: createDriver(axiosApi.instance),
        cache: true
    });

    const reducers = combineReducers({
        requests: requestsReducer,
    });

    function initStore(preloadedState) {
        return createStore(
            reducers,
            preloadedState,
            composeWithDevTools(applyMiddleware(...requestsMiddleware))
        )
    }

    let store = index ?? initStore(preloadedState);

    if (preloadedState && index) {  // After navigating to a page with an initial Redux state, merge that state
        store = initStore({ // with the current state in the index, and create a new index
            ...index.getState(),
            ...preloadedState,
        })
        index = undefined  // Reset the current index
    }

    if (typeof window === 'undefined') return {store, requestsPromise}; // For SSG and SSR always create a new index
    if (!index) index = store; // Create the index once in the client
    return {store, requestsPromise}
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
