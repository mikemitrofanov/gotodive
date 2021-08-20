import { APP_STARTED, categoryTypes, authTypes } from '../types/types'
import config from '../../config/app-config';

export const appStarted = () => ({
  type: APP_STARTED
});

export const fetchCategoriesRequest = () => ({
  type: categoryTypes.FETCH_CATEGORIES_REQUEST,
  request: {
    method: 'GET',
    url: '/api/categories',
  },
});

export const loginRequest = (data) => ({
  type: authTypes.LOGIN_REQUEST,
  request: {
    method: 'POST',
    url: '/api/login',
    data: data
  },
});

export const logout = () => ({
  type: authTypes.LOGOUT
})

export const logoutRequest = () => ({
  type: authTypes.LOGOUT_REQUEST,
  request: {
    method: 'POST',
    url: '/api/logout',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem(config.localStorageTokenKeyName)
    }
    // TODO: it's not implemented on  server side and not being used on client side yet
  }
})

export const resetAuth = () => ({
  type: authTypes.RESET_AUTH
})

export const registrationRequest = (data) => ({
  type: authTypes.REGISTRATION_REQUEST,
  request: {
    method: 'POST',
    url: '/api/registration',
    data: data
  },
});

export const fetchProfileRequest = () => ({
  type: authTypes.FETCH_PROFILE_REQUEST,
  request: {
    method: 'GET',
    url: '/api/user',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem(config.localStorageTokenKeyName)
    }
  },
});

export const fetchProfileWithRedirectRequest = () => ({
  ...fetchProfileRequest(),
  type: authTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST
})
