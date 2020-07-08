import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Landing } from "../components/screens";

function AppNavigator() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/dashboard" />} />
        <Route exact path="/dashboard" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppNavigator;
