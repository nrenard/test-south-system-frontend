import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../helpers/auth";

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={prop =>
      isAuthenticated() ? (
        <Component {...prop} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: prop.location } }} />
      )
    }
  />
);

export default PrivateRoute;
