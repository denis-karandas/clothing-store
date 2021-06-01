import React from 'react'
import {Col, Container, Row} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col className="footer__wrapper">
                        <span className="footer__logo">
                            <NavLink to="/">Clothing store</NavLink>
                        </span>
                        <p>Created by:&nbsp;<a href="https://github.com/denis-karandas" target="_blank" rel="noreferrer">denis-karandas</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer