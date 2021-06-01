import React, {useEffect, useState} from 'react'
import {Container} from "react-bootstrap"

import "./Home.scss"
import MainSection from "./components/MainSection/MainSection"
import ProductList from "./components/ProductList/ProductList"
import HomeAPI from "../../services/HomeAPI"

const Home = () => {
    const [topSales, setTopSales] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const [seasonalOffers, setSeasonalOffers] = useState([])

    useEffect(() => {
        // HomeAPI.fetchTopSales().then(items => setTopSales(items))
        // HomeAPI.fetchNewProducts().then(items => setNewProducts(items))
        // HomeAPI.fetchSeasonalOffers().then(items => setSeasonalOffers(items))
    }, [])

    return (
        <div className="home">
            <Container>
                <MainSection />
                <ProductList
                    name="Top sales"
                    link="/top-sales"
                    items={topSales}
                />
                <ProductList
                    name="New products"
                    link="/new-products"
                    items={newProducts}
                />
                <ProductList
                    name="Seasonal offers"
                    link="/seasonal-offers"
                    items={seasonalOffers}
                />
            </Container>
        </div>
    );
};

export default Home