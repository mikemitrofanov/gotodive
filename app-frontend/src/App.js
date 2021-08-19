import HomeView from "./views/HomeView/HomeView";
import LoginView from "./views/LoginView/LoginView"

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => (
  <Switch>
    <Route path="/home">
      <HomeView />
    </Route>
    <Route path="/login">
      <LoginView />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </Switch>
);

export default App;
