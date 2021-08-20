import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { appStarted } from './store/actions/actions'

import HomeView from "./views/HomeView/HomeView"
import LoginView from "./views/LoginView/LoginView"
import ProfileView from './views/ProfileView/ProfileView'
import RegistrationView from "./views/RegistrationView/RegistrationView"

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appStarted())
  }, [])

  const isAuthenticated = !!useSelector(state => state.auth.user)
  const unknownAuthStatus = !useSelector(state => state.auth.isAuthStatusDefined)
  const categories = useSelector(state => state.categories.categories)

  if (unknownAuthStatus || !categories.length) {
    return 'TODO: fullscreen loader spinner'
  }

  return (
    <Switch>
      <Route path="/home" component={HomeView} />

      {isAuthenticated ? <Route path="/profile" component={ProfileView} /> : null}

      {!isAuthenticated ? <Route path="/login" component={LoginView} /> : null}
      {!isAuthenticated ? <Route path="/registration" component={RegistrationView} /> : null}

      <Route path="/gallery" render={() => <h3>TODO: gallery page</h3>} />
      <Route path="/pricing" render={() => <h3>TODO: pricing page</h3>} />

      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  )
}

export default App
