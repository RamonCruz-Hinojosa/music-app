import * as React from "react";
import Login from "./Login";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./Landing";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Landing">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
