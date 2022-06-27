import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Layout from '../../Layout/Dashboard/Admin';
import { useAuth } from "../../Context/AuthContext"; 

function AdminDashBoardRoute({ component: Component, ...rest }) {
   const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
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

export default AdminDashBoardRoute;
