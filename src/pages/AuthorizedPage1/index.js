import React from "react";
import { ROOT } from "navigation/CONSTANTS";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
export const AuthorizedPage1 = () => {
  return (
    <div>
      <Link to={ROOT}>Home</Link>
      <Typography variant="h2">Welcome</Typography>
      <Typography variant="overline">Authorized Page </Typography>
    </div>
  );
};
