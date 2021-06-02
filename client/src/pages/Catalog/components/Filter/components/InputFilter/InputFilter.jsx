import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setInputFilter } from "../../../../../../redux/actions/catalogAction";
import './InputFilter.scss';

const InputFilter = ({ id, name, placeholder, value }) => {
    const dispatch = useDispatch();

    const changeValueHandler = e => dispatch(setInputFilter(id, e.target.value));

    return (
        <div className="filter input-filter">
            <input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={changeValueHandler}
            />
        </div>
    )
}

InputFilter.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
}

export default InputFilter;