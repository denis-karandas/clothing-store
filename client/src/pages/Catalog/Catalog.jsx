import React, {useEffect, useState} from 'react'
import {Container} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router"
import FilterSection from "./components/FilterSection/FilterSection.jsx"
import GoodsSection from "./components/GoodsSection/GoodsSection.jsx"
import {fetchProducts, setPage} from "../../redux/actions/catalog"
import './Catalog.scss'

const Catalog = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const filters = useSelector(({ filter }) => filter.items)
    const catalog = useSelector(({ catalog }) => catalog)
    const { page, limit, sortBy, loading } = catalog

    useEffect(() => {
        dispatch(setPage(1))
    }, [filters, sortBy])

    useEffect(() => {
        dispatch(fetchProducts(params, filters, page, limit, sortBy))
    }, [filters, page, sortBy])

    return (
        <Container className="catalog__wrapper">
            <FilterSection filters={filters} />
            <GoodsSection
                items={catalog.items}
                total={catalog.total}
                page={page}
                limit={limit}
                loading={loading}
            />
        </Container>
    )
}

export default Catalog