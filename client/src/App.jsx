import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Meetings from "./components/Meetings";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Welcome} />
        <Route path="/meetings" component={Meetings} />
      </Switch>
    </Router>
  );
};

export default App;
