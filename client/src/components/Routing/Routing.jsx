import React from 'react'
import AppRoute from "../AppRoute/AppRoute";
import { Route, Switch } from 'react-router-dom'
import { PUBLIC_ROUTE } from "../../utils/constants/appRouter";
import Home from "../../pages/Home/Home.jsx";
import SignIn from "../../pages/SignIn/SignIn";
import Catalog from "../../pages/Catalog/Catalog.jsx";
import Product from "../../pages/Product/Product";
import NotFound from "../../pages/NotFound/NotFound";
import {HOME_ROUTE} from "../../utils/constants/routes";


const routes = [
    {
        path: HOME_ROUTE,
        component: Home,
        exact: true,
        type: PUBLIC_ROUTE
    },
    {
        path: '/sign-in',
        component: SignIn,
        exact: true,
        type: PUBLIC_ROUTE
    },
    {
        path: '/:section?',
        component: Catalog,
        exact: true,
        type: PUBLIC_ROUTE
    },
    {
        path: '/:section?/:category?',
        component: Catalog,
        exact: true,
        type: PUBLIC_ROUTE
    },
    {
        path: '/:section?/:category?/:name?',
        component: Product,
        exact: true,
        type: PUBLIC_ROUTE
    },
]

function Routing() {
    return (
        <Switch>
            {
                routes.map((route, i) => <AppRoute key={i} {...route} />)
            }
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routing;