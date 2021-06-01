import React, { useEffect, useRef } from 'react'
import {useDispatch} from "react-redux"
import PropTypes from 'prop-types'
import {setCheckboxFilter} from "../../../../redux/actions/filter"
import './CheckboxFilter.scss'

const CheckboxFilter = ({ id, title, name, items }) => {
    const filterRef = useRef();
    const dispatch = useDispatch();

    const toggleFilter = e => {
        const path = e.path || (e.composedPath || e.composedPath());
        if(path.includes(filterRef.current)) {
            const filter =  filterRef.current.parentElement;
            const filterList = filterRef.current.nextSibling;
            filter.classList.toggle('active');

            if (filter.classList.contains('active')) {
                console.log(filterList.scrollHeight)
                filterList.style.maxHeight = filterList.scrollHeight + 'px';
            }
            else {
                filterList.style.maxHeight = 0;
            }
        }
    }

   const checkboxClickHandler = e => {
        dispatch(setCheckboxFilter(id, e.target.value))
   }

    useEffect(() => {
        document.body.addEventListener('click', toggleFilter);
    }, []);

    return (
        <div className="filter checkbox-filter active">
            <div ref={filterRef} className="filter__title">
                <p>{title}</p>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0.707107" y1="1.29289" x2="5.31371" y2="5.89949" stroke="#2C2C2C" strokeWidth="2"/> <line y1="-1" x2="6.51472" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.38403 2)" stroke="#2C2C2C" strokeWidth="2"/> </svg>
            </div>
            <ul style={{'maxHeight': '100%'}}>
                {
                    items && items.map((item, i) => {
                        return (
                            <li key={`${name}_filter_${i}`}>
                                <input
                                    type="checkbox"
                                    name={name}
                                    id={`${name}-${i}`}
                                    value={item.id}
                                    checked={item.checked}
                                    onChange={checkboxClickHandler}
                                />
                                <label htmlFor={`${name}-${i}`}>{item.value}</label>
                                <span>{item.available}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

CheckboxFilter.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array
}

export default CheckboxFilter