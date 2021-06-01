import React from 'react'
import {Col, Row} from "react-bootstrap"

import './MainSection.scss'

const MainSection = () => {
    return (
        <Row>
            <Col className="mainSection home__main-screen">
                <div style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_1280.jpg')"}}>
                    <p>
                        <span>Summer sales - 50%</span>
                        <span>New collections</span>
                    </p>
                </div>
                <div style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_960_720.jpg')"}}></div>
                <div style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2017/06/20/22/14/shoes-2425122_1280.jpg')"}}></div>
            </Col>
        </Row>
    )
}

export default MainSection