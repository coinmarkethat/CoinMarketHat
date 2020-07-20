import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';

import { Home, Auth } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => { return <Redirect to="/dashboard" />; }} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}
