import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProducts, setPage } from "../../redux/actions/catalogAction";
import { getCatalog } from "../../redux/selectors/catalogSelector";
import FilterSection from "./components/FilterSection/FilterSection.jsx";
import GoodsSection from "./components/GoodsSection/GoodsSection.jsx";
import './Catalog.scss';

const Catalog = () => {
    const { products, total, page, limit, sortBy, loading, filters } = useSelector(getCatalog);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(setPage(1));
    }, [filters, sortBy]);

    useEffect(() => {
        dispatch(fetchProducts(params, filters, page, limit, sortBy));
    }, [filters, page, sortBy]);

    return (
        <Container className="catalog__wrapper">
            <FilterSection filters={filters} />
            <GoodsSection
                items={products}
                total={total}
                page={page}
                limit={limit}
                loading={loading}
            />
        </Container>
    )
}

export default Catalog;