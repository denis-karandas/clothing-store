import React from 'react'
import {Col, Row} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import PropTypes from 'prop-types'
import './ProductList.scss'

const ProductList = ({ name, link, items }) => {
    return (
        <Row>
            <Col className="productList">
                <div className="productList__title">
                    <h2>{name}</h2>
                    <span>
                        <NavLink to={link}>Show more</NavLink>
                    </span>
                </div>
                <ul>
                    {
                        items && items.map((item, i) => {
                            const discountLabel = (
                                item.discount && item.discount.type === 'PERCENT'
                                    ? <span className="productList__discount">-{item.discount.discount}%</span>
                                    : false
                            )

                            return (
                                <li key={`${item.name}_${i}`}>
                                    <NavLink to={item.link}>
                                        <div className="productList__image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </NavLink>
                                    <p className="productList__name">
                                        <NavLink to={item.link}>
                                            {item.name}
                                        </NavLink>
                                    </p>
                                    <div className="productList__price">
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
                        })
                    }
                </ul>
            </Col>
        </Row>
    )
}

ProductList.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    items: PropTypes.array
}

export default ProductList