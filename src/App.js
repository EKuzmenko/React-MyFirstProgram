import React from 'react';
import '../src/css/App.css';
import Menu from './components/menu.js';
import Home from './components/home.js';
import About from './components/about.js';
import Users from './components/users.js';
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
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
