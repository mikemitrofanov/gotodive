import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { appStarted } from './store/actions/actions'

import HomeView from "./views/HomeView/HomeView"
import LoginView from "./views/LoginView/LoginView"
import ProfileView from './views/ProfileView/ProfileView'
import LogoutView from './views/LogoutView/LogoutView'
import ChangePasswordView from './views/ChangePasswordView/ChangePasswordView'
import RegistrationView from "./views/RegistrationView/RegistrationView"

import AdminPanel from './Admin/AdminApp'

const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appStarted())
  }, [])

  const isAuthenticated = !!useSelector(state => state.auth.user)
  const unknownAuthStatus = !useSelector(state => state.auth.isAuthStatusDefined)
  const categories = useSelector(state => state.categories.categories)
  const isAdmin = !!useSelector(state => state.auth.user?.isAdmin)

  if (unknownAuthStatus || !categories.length) {
    return 'TODO: fullscreen loader spinner'
  }

  return (
    <Switch>
      <Route path="/home" component={HomeView} />

      {isAuthenticated ? <Route path="/profile" component={ProfileView} /> : null}
      {isAuthenticated ? <Route path="/logout" component={LogoutView} /> : null}
      {isAuthenticated ? <Route path="/change-password" component={ChangePasswordView} /> : null}

      {!isAuthenticated ? <Route path="/login" component={LoginView} /> : null}
      {!isAuthenticated ? <Route path="/registration" component={RegistrationView} /> : null}

      <Route path="/gallery" render={() => <h3>TODO: gallery page</h3>} />
      <Route path="/pricing" render={() => <h3>TODO: pricing page</h3>} />

      {isAdmin ? <Route path="/admin" component={AdminPanel} /> : null}

      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  )
}

export default Router
