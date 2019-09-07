import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from "../../ErrorBoundary";

import routes from './routes';


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

class ContactsRouter extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </ErrorBoundary>

            </div>
        );
    }
}

export default ContactsRouter;
