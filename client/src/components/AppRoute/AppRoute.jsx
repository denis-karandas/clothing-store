import React from 'react';
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";

function AppRoute({ path, component, exact }) {
    return <Route path={path} component={component} exact={exact} />
}

AppRoute.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType,
    exact: PropTypes.bool,
}

export default AppRoute