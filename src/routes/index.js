import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Loader from "../components/Loader";

const lazyDefault = page => lazy(() => import("../pages/" + page));

const Routes = () => (
  <Switch>
    <Suspense fallback={<Loader />}>
      <Route exact path="/" component={lazyDefault("Home")} />
      {/* <Route exact path="/login" component={lazyDefault('Login')} />
    <Route exact path="*" component={lazyDefault('Home')} /> */}
    </Suspense>
  </Switch>
);

export default Routes;
