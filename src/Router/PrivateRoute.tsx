import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }:any) => {
  
  const { jsession } = useSelector(
    (state: any) => ({
      jsession: state.auth.jsession,
    }),
    shallowEqual
  );
  const isLoggedInSession = sessionStorage.getItem("JSESSIONID");
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          {jsession || isLoggedInSession ? (
            <Component {...matchProps} />
          ) : (
            <Redirect to="/login" />
          )}
        </Layout>
      )}
    />
  );
};
export default PrivateRoute;
