import { success } from "@redux-requests/core"
import { categoryTypes } from "../types/types"

const initialAuthReducerState = {
  user: null
}

function authReducer(state = initialAuthReducerState, action) {
  switch (action.type) {
    case success(categoryTypes.FETCH_PROFILE_REQUEST):
    case success(categoryTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST):
      return {
        ...state,
        user: action.response.data.user
      }
    default:
      return state
  }
}

const reducers = {
  auth: authReducer
}

export default reducers
