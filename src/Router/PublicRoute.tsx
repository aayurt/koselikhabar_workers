import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};
export default PublicRoute;
