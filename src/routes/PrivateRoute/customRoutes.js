import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({ component: component, ...rest }) {

    return (
        <Route
            {...rest}
            render={props => {
                return true ? <component {...props} /> : <Redirect to="/login"></Redirect>
            }} 
        />
    );
}

export default PrivateRoute;