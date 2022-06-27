import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../../Layout/Dashboard/Creator";
import { useAuth } from "../../Context/AuthContext"; 
function CreatorRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
     render={props => {
                return currentUser ? (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                ) : (
                  <Redirect to="/"></Redirect>
                );
            }} 

    />
  );
}

export default CreatorRoute;






 
      