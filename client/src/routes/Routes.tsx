import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// layout constants
import { LayoutTypes } from '../constants/layout';

// strore
import { RootState } from '../redux/store';

// All layouts containers
import DefaultLayout from '../layouts/Default';
import VerticalLayout from '../layouts/Vertical';
import DetachedLayout from '../layouts/Detached';
import HorizontalLayout from '../layouts/Horizontal/';
import TwoColumnLayout from '../layouts/TwoColumn/';

import { authProtectedFlattenRoutes, publicProtectedFlattenRoutes } from './index';

interface RoutesProps {}

const Routes = (props: RoutesProps) => {
    const { layout } = useSelector((state: RootState) => ({
        layout: state.Layout,
    }));

    const getLayout = () => {
        let layoutCls = TwoColumnLayout;

        switch (layout.layoutType) {
            case LayoutTypes.LAYOUT_HORIZONTAL:
                layoutCls = HorizontalLayout;
                break;
            case LayoutTypes.LAYOUT_DETACHED:
                layoutCls = DetachedLayout;
                break;
            case LayoutTypes.LAYOUT_VERTICAL:
                layoutCls = VerticalLayout;
                break;
            default:
                layoutCls = TwoColumnLayout;
                break;
        }
        return layoutCls;
    };

    let Layout = getLayout();

    return (
        <BrowserRouter>
            <Switch>
                <Route path={publicProtectedFlattenRoutes.map((r: any) => r['path'])}>
                    <DefaultLayout {...props} layout={layout}>
                        <Switch>
                            {publicProtectedFlattenRoutes.map((route: any, index: number) => {
                                return (
                                    !route.children && (
                                        <route.route
                                            key={index}
                                            path={route.path}
                                            roles={route.roles}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    )
                                );
                            })}
                        </Switch>
                    </DefaultLayout>
                </Route>

                <Route path={authProtectedFlattenRoutes.map((r: any) => r['path'])}>
                    <Layout {...props}>
                        <Switch>
                            {authProtectedFlattenRoutes.map((route: any, index: number) => {
                                return (
                                    !route.children && (
                                        <route.route
                                            key={index}
                                            path={route.path}
                                            roles={route.roles}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    )
                                );
                            })}
                        </Switch>
                    </Layout>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
