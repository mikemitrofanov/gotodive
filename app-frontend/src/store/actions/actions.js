import { categoryTypes } from '../types/types'
import config from '../../config/app-config';

export const fetchCategoriesRequest = () => ({
  type: categoryTypes.FETCH_CATEGORIES_REQUEST,
  request: {
    method: 'GET',
    url: '/api/categories',
  },
});

export const loginRequest = (data) => ({
  type: categoryTypes.LOGIN_REQUEST,
  request: {
    method: 'POST',
    url: '/api/login',
    data: data
  },
});

export const registrationRequest = (data) => ({
  type: categoryTypes.REGISTRATION_REQUEST,
  request: {
    method: 'POST',
    url: '/api/registration',
    data: data
  },
});

export const fetchProfileRequest = () => ({
  type: categoryTypes.FETCH_PROFILE_REQUEST,
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
  type: categoryTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST
})
