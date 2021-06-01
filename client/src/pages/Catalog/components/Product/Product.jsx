import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"
import './Product.scss'

const Product = ({ item, i }) => {
    const discountLabel = (
        item.discount && item.discount.type === 'PERCENT'
            ? <span className="product__discount">-{item.discount.discount}%</span>
            : false
    )

    return (
        <li key={`${item.name}_${i}`}>
            <NavLink to={item.link}>
                <div className="product__image">
                    <img src={item.image} alt={item.name} />
                </div>
            </NavLink>
            <p className="product__name">
                <NavLink to={item.link}>
                    {item.name}
                </NavLink>
            </p>
            <div className="product__price">
                <p>${item.price}</p>
                {
                    item.discount
                        ? <span>${item.discount.total}</span>
                        : false
                }
            </div>
            { discountLabel }
        </li>
    )
}

Product.propTypes = {
    item: PropTypes.object,
    i: PropTypes.number
}

export default Product