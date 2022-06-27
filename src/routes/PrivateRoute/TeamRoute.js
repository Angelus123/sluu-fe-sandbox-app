import React from 'react';
import { Route} from "react-router-dom";
import Layout from '../../Layout/Team/Chat';

function TeamRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        ) 
      }}
    />
  );
}

export default TeamRoute;
