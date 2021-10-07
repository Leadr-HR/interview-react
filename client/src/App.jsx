import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Meetings from "./components/Meetings";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/meetings" component={Meetings} />
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  );
};

export default App;
