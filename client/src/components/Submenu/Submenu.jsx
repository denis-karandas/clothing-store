import React from 'react';
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";
import CategoryList from "./components/CategoryList/CategoryList.jsx";

import './Submenu.scss'

const Submenu = ({ items }) => {
    return (
        <div className="submenu">
            <Container>
                <ul className="submenu__wrapper">
                    {
                        items && items.map((item, i) => {
                            return (
                                <li
                                    key={`${item.name}_${i}`}
                                    className="submenu__block"
                                >
                                    <CategoryList name={item.name} items={item.list} />
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
        </div>
    )
}

Submenu.propTypes = {
    items: PropTypes.array
}

export default Submenu;