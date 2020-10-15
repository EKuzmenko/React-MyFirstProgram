import React from 'react';
import '../src/css/App.css';
//import Menu from './components/menu.js';
import Home from './components/home.js';
import AboutPage from './pages/AboutPage.js';
import UsersPage from './pages/UsersPage.js';
import Nomatch from './components/Nomatch.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AboutPage">About</Link>
            </li>
            <li>
              <Link to="/UsersPage">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AboutPage">
            <AboutPage />
          </Route>
          <Route path="/UsersPage">
            <UsersPage />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
