import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import MainSection from "./components/MainSection/MainSection";
import ProductList from "./components/ProductList/ProductList";
import "./Home.scss";

const Home = () => {
    const [topSales, setTopSales] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [seasonalOffers, setSeasonalOffers] = useState([]);

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

export default Home;