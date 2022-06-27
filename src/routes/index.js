import React from "react";
import TeamRoute from "./PrivateRoute/TeamRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../component/NotFound";
import Chat from "../component/TeamChat";
export default function index() {

  return (
   <Router>
    <Switch> 
      <Route path="/chat" exact={true} component={Chat} />
      <TeamRoute path="/team/chat" exact={true} component={Chat} />
      <Route path="*" exact={true} component={NotFound} />
    </Switch>
   </Router>
       
  
  
  );
}
