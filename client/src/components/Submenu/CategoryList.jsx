import React from 'react'
import {NavLink} from "react-router-dom"
import PropTypes from 'prop-types'

const CategoryList = ({ name, items }) => {
    return (
        <>
            <span>{name}</span>
            <ul>
                {items.map((item, i) => {
                    return (
                        <li key={`${item.name}_${i}`}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

CategoryList.propTypes = {
    name: PropTypes.string,
    items: PropTypes.array
}

export default CategoryList