import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, isAuthenticated, ...children }) {
  if (isAuthenticated === true) {
    return <Route {...children} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="login" />;
}

export default PrivateRoute;
