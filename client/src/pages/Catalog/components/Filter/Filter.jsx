import React from 'react'
import PropTypes from 'prop-types'
import InputFilter from "../InputFilter/InputFilter.jsx"
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter.jsx"

export const INPUT_FILTER = 'INPUT_FILTER';
export const CHECKBOX_FILTER = 'CHECKBOX_FILTER';

const Filter = ({ id, filter }) => {
    switch (filter.type) {
        case INPUT_FILTER:
            return <InputFilter id={id} {...filter} />
        case CHECKBOX_FILTER:
            return <CheckboxFilter id={id} {...filter} />
        default: return null;
    }
}

Filter.propTypes = {
    id: PropTypes.number,
    filter: PropTypes.object
}

export default Filter