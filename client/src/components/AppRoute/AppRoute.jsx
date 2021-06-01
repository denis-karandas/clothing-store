import React from 'react'
import { Route } from "react-router-dom"
import PropTypes from 'prop-types'

export const PUBLIC_ROUTE = 1
export const USER_ROUTE = 2

function AppRoute({ path, component, exact }) {
    return <Route path={path} component={component} exact={exact} />
}

AppRoute.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType,
    exact: PropTypes.bool,
}

export default AppRoute