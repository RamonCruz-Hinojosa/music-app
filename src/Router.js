import React from "react";
import { Switch, Route } from "react-router";
import App from "./App";
import Landing from "./Landing";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Landing" component={Landing} />
    </Switch>
  );
};

export default Router;
