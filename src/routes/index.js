import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loader from "../components/Loader";

import PrivateRoute from "./PrivateRoute";

const lazyDefault = page => lazy(() => import("../pages/" + page));

const Routes = () => (
  <Switch>
    <Suspense fallback={<Loader />}>
      <PrivateRoute exact path="/" component={lazyDefault("Home")} />
      <Route exact path="/login" component={lazyDefault("Login")} />
    </Suspense>
  </Switch>
);

export default Routes;
