import React from 'react'
import {Route, Switch} from 'react-router-dom'

import AppRoute from "../AppRoute/AppRoute.jsx"
import Dashboard from "../../pages/Dashboard/Dashboard.jsx"
import NotFound from "../NotFound/NotFound.jsx"

const routes = [
    {
        path: '/',
        component: Dashboard,
        exact: true,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        exact: true,
    }
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

export default Routing