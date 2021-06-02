import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setNextPage, setPage, setPrevPage } from "../../../../redux/actions/catalogAction";
import './Pagination.scss';

const Pagination = ({ total, page, limit }) => {
    const dispatch = useDispatch();
    const totalPages = Math.ceil(total / limit);

    const nextPageHandler = () => {
        if (page * limit < total) dispatch(setNextPage());
    }

    const prevPageHandler = () => {
        if (page > 1) dispatch(setPrevPage());
    }

    const changeValueHandler = e => {
        const value = +e.target.value;
        if (value > 0 && value <= totalPages) dispatch(setPage(value));
    }

    return (
        <div className="catalog__pagination">
            <span onClick={prevPageHandler}>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0.707107" y1="1.29289" x2="5.31371" y2="5.89949" strokeWidth="2"/> <line y1="-1" x2="6.51472" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.38403 2)" strokeWidth="2"/> </svg>
            </span>
            <input type="text" value={page} onChange={changeValueHandler} />
            <p>from {totalPages}</p>
            <span onClick={nextPageHandler}>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0.707107" y1="1.29289" x2="5.31371" y2="5.89949" strokeWidth="2"/> <line y1="-1" x2="6.51472" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.38403 2)" strokeWidth="2"/> </svg>
            </span>
        </div>
    )
}

Pagination.propTypes = {
    total: PropTypes.number,
    page: PropTypes.number,
    limit: PropTypes.number
}

export default Pagination;