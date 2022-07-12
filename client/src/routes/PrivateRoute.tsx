import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

import { APICore } from '../helpers/api/apiCore';

interface PrivateRouteProps {
    component: React.FunctionComponent<RouteProps>;
    roles?: string;
}

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ component: Component, roles, ...rest }: PrivateRouteProps) => {
    const api = new APICore();

    return (
        <Route
            {...rest}
            render={(props: RouteComponentProps) => {
                if (api.isUserAuthenticated() === false) {
                    // not logged in so redirect to login page with the return url
                    return (
                        <Redirect
                            to={{
                                pathname: '/auth/login',
                                state: { from: props['location'] },
                            }}
                        />
                    );
                }

                const loggedInUser = api.getLoggedInUser();

                // check if route is restricted by role
                if (roles && roles.indexOf(loggedInUser.role) === -1) {
                    // role not authorised so redirect to home page
                    return <Redirect to={{ pathname: '/' }} />;
                }
                // authorised so return component
                return <Component {...props} />;
            }}
        />
    );
};

export default PrivateRoute;
