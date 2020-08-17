import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {
  Landing,
  Login,
  Signup,
  ResetPassword,
  Forgot,
  MoonBoard,
} from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <Redirect to="/dashboard" />;
          }}
        />
        <Route exact path="/dashboard" component={Landing} />
        <Route exact path="/moonboard" component={MoonBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/reset" component={ResetPassword} />
        <Route exact path="/forgot" component={Forgot} />
      </Switch>
    </BrowserRouter>
  );
}
