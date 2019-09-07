import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from "./ErrorBoundary";

import Login from "./userAuth/Login"
import Contacts from "./Contacts";



const mainRoutes = [
    {
        path: "/login",
        exact: true,
        // component: Home
        component: Login
    }, {
        path: "/contacts/all",
       // exact: true,
        // component: Home
        component: Contacts
    },
    
];


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

class MainRouter extends Component {
    render() {



        return (
            <div>
                <ErrorBoundary>
                    <Switch>
                        {mainRoutes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </ErrorBoundary>

            </div>
        );
    }
}

export default MainRouter;
