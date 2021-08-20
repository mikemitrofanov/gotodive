import { success, error } from "@redux-requests/core"
import { authTypes, categoryTypes } from "../types/types"

const categoriesReducerInitialState = {
  categories: []
}

function categoriesReducer(state = categoriesReducerInitialState, action) {
  switch (action.type) {
    case success(categoryTypes.FETCH_CATEGORIES_REQUEST):
      return {
        ...state,
        categories: action.response.data.categories
      }
    default:
      return state
  }
}

const initialAuthReducerState = {
  isAuthStatusDefined: false, // is auth status checked
  // remains false only until first token check
  user: null
}

function authReducer(state = initialAuthReducerState, action) {
  switch (action.type) {
    case success(authTypes.FETCH_PROFILE_REQUEST):
    case success(authTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST):
      return {
        ...state,
        isAuthStatusDefined: true,
        user: action.response.data.user
        // now we definetly know user IS authorized.
        // Happens after login or registration request or straight after app launched, if token in localStorage is correct
      }
    case error(authTypes.FETCH_PROFILE_REQUEST):
    case error(authTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST):
      return {
        ...state,
        isAuthStatusDefined: true
        // now we definitely know user is not authorized.
        // Happens straight after app launched, if token is outdated or missing
      }

    default:
      return state
  }
}

const reducers = {
  auth: authReducer,
  categories: categoriesReducer,
}

export default reducers
