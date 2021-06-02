import React from 'react';
import PropTypes from 'prop-types';
import InputFilter from "./components/InputFilter/InputFilter.jsx";
import CheckboxFilter from "./components/CheckboxFilter/CheckboxFilter.jsx";
import { CHECKBOX_FILTER, INPUT_FILTER } from "../../utils/constants/filter";


const Filter = ({ id, filter }) => {
    switch (filter.type) {
        case INPUT_FILTER:
            return <InputFilter id={id} {...filter} />
        case CHECKBOX_FILTER:
            return <CheckboxFilter id={id} {...filter} />
        default:
            return null;
    }
}

Filter.propTypes = {
    id: PropTypes.number,
    filter: PropTypes.object
}

export default Filter