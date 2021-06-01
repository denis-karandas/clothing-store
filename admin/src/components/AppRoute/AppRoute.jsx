import React from 'react'
import { Route } from "react-router-dom"
import PropTypes from 'prop-types'

function AppRoute({ path, component, exact }) {
    return <Route path={path} component={component} exact={exact} />
}

AppRoute.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType,
    exact: PropTypes.bool
}

export default AppRoute