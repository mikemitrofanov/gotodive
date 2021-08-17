import { Switch, Route, Link } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';

const App = () => (
  <DefaultLayout>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/about">
        <div>about</div>
      </Route>
      <Route path="/users">
        <div>users</div>
      </Route>
      <Route path="/">
        <div>home</div>
      </Route>
    </Switch>
  </DefaultLayout>
);

export default App;
