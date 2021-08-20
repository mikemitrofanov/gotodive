import { useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"

import HomeView from "./views/HomeView/HomeView"
import LoginView from "./views/LoginView/LoginView"
import RegistrationView from "./views/RegistrationView/RegistrationView"

const App = () => {
  const isAuthenticated = !!useSelector(state => state.auth.user)

  return (
    <Switch>
      <Route path="/home" component={HomeView} />

      {!isAuthenticated ? (<>
        <Route path="/login" component={LoginView} />
        <Route path="/registration" component={RegistrationView} />
      </>) : null}

      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  )
}

export default App
