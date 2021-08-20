import { put, takeEvery } from 'redux-saga/effects'
import { success } from '@redux-requests/core'
import { push } from 'connected-react-router'
import { categoryTypes } from '../types/types'
import { fetchProfileWithRedirectRequest } from '../actions/actions'
import config from '../../config/app-config'

function* rootSaga() {
  function* callFetchProfileWithRedirectRequest(action) {
    localStorage.setItem(config.localStorageTokenKeyName, action.response.data.token)
    yield put(fetchProfileWithRedirectRequest())
  }

  // fetch profile and redirect to home after success LOGIN and REGISTRATION requests
  yield takeEvery(success(categoryTypes.LOGIN_REQUEST), callFetchProfileWithRedirectRequest)
  yield takeEvery(success(categoryTypes.REGISTRATION_REQUEST), callFetchProfileWithRedirectRequest)

  yield takeEvery(success(categoryTypes.FETCH_PROFILE_WITH_REDIRECT_REQUEST), function* redirectToHome() {
    yield put(push('/home'))
  })
}

export default rootSaga
