import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Welcome from "./components/Welcome";
import Meetings from "./components/Meetings";
import "./App.css";

const App = () => {
  return (
    <div className="pageWrapper">
      <Router>
        <nav className="mainNav">
          <h1>Navigation</h1>
          <Link to="/">Welcome Page</Link>
          <Link to="/meetings">Meeting List</Link>
        </nav>
        <Switch>
          <Route path="/meetings" component={Meetings} />
          <Route path="/" component={Welcome} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
