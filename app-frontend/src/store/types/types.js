export const APP_STARTED = 'APP_STARTED'

export const categoryTypes = {
  FETCH_CATEGORIES_REQUEST: 'FETCH_CATEGORIES_REQUEST',
  FETCH_CATEGORY_BY_ID_REQUEST: 'FETCH_CATEGORY_BY_ID_REQUEST',
  UPDATE_CATEGORY_REQUEST: 'UPDATE_CATEGORY_REQUEST',
  CREATE_CATEGORY_REQUEST: 'CREATE_CATEGORY_REQUEST',
  REMOVE_CATEGORY_REQUEST: 'REMOVE_CATEGORY_REQUEST',
}

export const authTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
  FETCH_PROFILE_REQUEST: 'FETCH_PROFILE_REQUEST',
  FETCH_PROFILE_WITH_REDIRECT_REQUEST: 'FETCH_PROFILE_WITH_REDIRECT_REQUEST',
  CHECK_AUTHENTICATION: 'CHECK_AUTHENTICATION',
  LOGOUT: 'LOGOUT', // triggers LOGOUT_REQUEST and RESET_AUTH
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  RESET_AUTH: 'RESET_AUTH',
  UPDATE_PROFILE_DATA_REQUEST: 'UPDATE_PROFILE_DATA_REQUEST',
}

const allTypes = {
  categoryTypes,
  authTypes,
}

export default allTypes
