import React from 'react'
import PropTypes from 'prop-types'
import Product from "../Product/Product"
import SortBy from "../SortBy/SortBy"
import Pagination from "../Pagination/Pagination"
import './GoodsSection.scss'

const GoodsSection = ({ items, total, page, limit, loading }) => {
    return (
        <div className="catalog__right">
            <div className="catalog__header">
                <Pagination total={total} page={page} limit={limit} />
                <SortBy />
            </div>
            <ul className="catalog__content product">
                {
                    items.map((item, i) => {
                        return <Product
                            key={`${item.name}_${i}`}
                            item={item}
                            i={i}
                        />
                    })
                }
            </ul>
            {
                loading && <div className="catalog__loader"></div>
            }
        </div>
    )
}

GoodsSection.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    page: PropTypes.number,
    limit: PropTypes.number,
    loading: PropTypes.bool
}

export default GoodsSection