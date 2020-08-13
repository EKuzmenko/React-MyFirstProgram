import React from 'react';
import logo from '../../src/img/logo.svg';
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

function Nomatch() {
  let location = useLocation();

  return (
    <div>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </div>
  );
}

export default Nomatch;
