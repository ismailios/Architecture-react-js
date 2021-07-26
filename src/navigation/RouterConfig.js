import React from "react";
import { Switch } from "react-router-dom";
import Home from "pages/Home/Home";

import { ROOT, DASHBOARD, LOGIN } from "navigation/CONSTANTS";

import { AuthorizedPage1 } from "pages/AuthorizedPage1";
import PublicRoute from "./Auth/PublicRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import login from "pages/Login/Login";
import { useSelector } from "react-redux";

export const RouterConfig = (props) => {
  const token = useSelector((state) => state.auth.token);

  console.log("token " + token);
  const isAuthenticated = !!token;

  // const isAuthenticated = false;
  const roles = "admin";
  return (
    <Switch>
      <PublicRoute
        exact
        isAuthenticated={isAuthenticated}
        roles={roles}
        path={ROOT}
        component={Home}
      />
      <PublicRoute
        exact
        isAuthenticated={isAuthenticated}
        roles={roles}
        path={LOGIN}
        component={login}
      />
      <PrivateRoute
        exact
        path={DASHBOARD}
        component={AuthorizedPage1}
        isAuthenticated={isAuthenticated}
        roles={roles}
      />
    </Switch>
  );
};
