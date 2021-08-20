import { put, takeEvery } from 'redux-saga/effects'
import { success, error } from '@redux-requests/core'
import { push } from 'connected-react-router'
import { APP_STARTED, authTypes } from '../types/types'
import { fetchProfileRequest, fetchProfileWithRedirectRequest, fetchCategoriesRequest } from '../actions/actions'

import config from '../../config/app-config'

function* rootSaga() {
  // set token to localStorage, fetch profile and redirect to home after success LOGIN and REGISTRATION requests
  const loginAndRegistration = [success(authTypes.LOGIN_REQUEST), success(authTypes.REGISTRATION_REQUEST)]
  yield takeEvery(loginAndRegistration, function* callFetchProfileWithRedirectRequest(action) {
    localStorage.setItem(config.localStorageTokenKeyName, action.response.data.token)
    yield put(fetchProfileWithRedirectRequest())
  })

  yield takeEvery(success(authTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST), function* redirectToHome() {
    yield put(push('/home'))
  })

  yield takeEvery(APP_STARTED, function* appStartedAction() {
    // fetchProfileRequest is required even for missing token case
    // NOTE: loader inside App.js component depends on store.auth.isAuthStatusDefined field
    yield put(fetchProfileRequest())
    yield put(fetchCategoriesRequest())
    
  })

  const fetchProfileFailed = [error(authTypes.FETCH_PROFILE_REQUEST), error(authTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST)]
  yield takeEvery(fetchProfileFailed, function clearToken() {
    localStorage.removeItem(config.localStorageTokenKeyName)
  })
}

export default rootSaga
