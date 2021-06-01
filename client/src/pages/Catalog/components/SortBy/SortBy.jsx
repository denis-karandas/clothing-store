import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setSortBy} from "../../../../redux/actions/catalog"
import classNames from 'classnames'
import './SortBy.scss'

const items = [
    {id: 1, name: 'Recommended'},
    {id: 2, name: 'Newest'},
    {id: 3, name: 'Price Low - High'},
    {id: 4, name: 'Price High - Low'}
]

const SortBy = () => {
    const [toggle, setToggle] = useState(false)
    const sortByRef = useRef()
    const dispatch = useDispatch()
    const activeItem = useSelector(({ catalog }) => catalog.sortBy)

    const classes = classNames('catalog__sort', {
        'active': toggle
    })

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    const selectItemHandler = id => {
        dispatch(setSortBy(id))
        setToggle(false)
    }

    const outsideClickHandler = e => {
        const path = e.path || (e.composedPath || e.composedPath());
        if(!path.includes(sortByRef.current)) {
            setToggle(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', outsideClickHandler);
    }, [])

    return (
        <div
            className={classes}
            ref={sortByRef}
        >
            <div
                className="catalog__dropdown"
                onClick={toggleHandler}
            >
                <p>Sort by</p>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0.707107" y1="1.29289" x2="5.31371" y2="5.89949" stroke="#2C2C2C" strokeWidth="2"/> <line y1="-1" x2="6.51472" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.38403 2)" stroke="#2C2C2C" strokeWidth="2"/> </svg>
            </div>
            <ul>
                {
                    items && items.map(item => <li
                        key={`${item.name}_${item.id}`}
                        className={item.id === activeItem ? 'active' : ''}
                        onClick={() => selectItemHandler(item.id)}
                    >{item.name}</li>)
                }
            </ul>
        </div>
    )
}

export default SortBy