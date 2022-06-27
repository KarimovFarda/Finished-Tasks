import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
  const isAuthenticated = localStorage.getItem("token");;
  if (isAuthenticated || sessionStorage.getItem("user")) {
    return children
  }
    window.location.href="login"
  return <Route path="/redirect" element={ <Redirect to="/login" /> } />
}

export default PrivateRoute