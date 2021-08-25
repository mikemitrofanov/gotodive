import { put, takeEvery } from 'redux-saga/effects'
import { success, error } from '@redux-requests/core'
import { push } from 'connected-react-router'
import { NotificationManager } from 'react-notifications'
import { APP_STARTED, authTypes, categoryTypes } from '../types/types'
import { fetchProfileRequest, fetchProfileWithRedirectRequest, fetchCategoriesRequest, resetAuth } from '../actions/actions'
import { localStorageTokenKeyName } from '../../config/app-config'

function* rootSaga() {
  // set token to localStorage, fetch profile and redirect to home after success LOGIN and REGISTRATION requests
  const loginAndRegistration = [success(authTypes.LOGIN_REQUEST), success(authTypes.REGISTRATION_REQUEST)]
  yield takeEvery(loginAndRegistration, function* callFetchProfileWithRedirectRequest(action) {
    localStorage.setItem(localStorageTokenKeyName, action.response.data.token)
    yield put(fetchProfileWithRedirectRequest())
  })

  yield takeEvery(success(authTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST), function* redirectToHome() {
    yield put(push('/home'))
  })

  const loginRegistrationError = [error(authTypes.LOGIN_REQUEST), error(authTypes.REGISTRATION_REQUEST)]
  yield takeEvery(loginRegistrationError, function errorNotification(data) {
    NotificationManager.error(data.error.response.data.message)
  })

  yield takeEvery(APP_STARTED, function* appStartedAction() {
    // fetchProfileRequest is required even for missing token case
    // NOTE: loader inside App.js component depends on store.auth.isAuthStatusDefined field
    yield put(fetchProfileRequest())
    yield put(fetchCategoriesRequest())
  })

  const fetchProfileFailed = [error(authTypes.FETCH_PROFILE_REQUEST), error(authTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST)]
  yield takeEvery(fetchProfileFailed, function clearToken() {
    localStorage.removeItem(localStorageTokenKeyName)
  })

  yield takeEvery(authTypes.LOGOUT, function* logout() {
    yield put(resetAuth())
    localStorage.removeItem(localStorageTokenKeyName)
  })

  yield takeEvery(success(authTypes.UPDATE_PROFILE_DATA_REQUEST), function* () {
    yield put(fetchProfileRequest())
  })

  const adminCategoryRequests = [
    success(categoryTypes.CREATE_CATEGORY_REQUEST),
    success(categoryTypes.REMOVE_CATEGORY_REQUEST),
    success(categoryTypes.UPDATE_CATEGORY_REQUEST),
  ]
  yield takeEvery(adminCategoryRequests, function* () {
    yield put(fetchCategoriesRequest())
  })
}

export default rootSaga
