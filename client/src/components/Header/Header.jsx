import React, { useEffect, useState } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../services/API";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Submenu from "../Submenu/Submenu";
import './Header.scss';

const Header = () => {
    const [menu, setMenu] = useState([]);
    const [{ data }] = useFetch({ url: URL.APP.HEADER_MENU, method: 'GET' });

    useEffect(() => {
        setMenu(data);
    }, [data]);

    return (
        <div className="header">
            <Container>
                <Row>
                    <Col lg={2}>
                        <span className="header__logo">
                            <NavLink to="/">Clothing store</NavLink>
                        </span>
                    </Col>
                    <Col lg={8} style={{position: 'static'}}>
                        <Nav className="header__menu header__navigation">
                            {
                                menu && menu.map((item, i) => {
                                    return (
                                        <Nav.Item key={`${item.name}_${i}`}>
                                            <Nav.Link as={Link} to={item.path} className={item.special ? 'special' : ''}>{item.name}</Nav.Link>
                                            {item.submenu && <Submenu items={item.submenu} />}
                                        </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                    </Col>
                    <Col lg={2}>
                        <Nav className="header__menu">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;