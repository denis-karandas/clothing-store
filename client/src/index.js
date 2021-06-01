import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./redux/store"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Routing from './components/Routing/Routing'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './assets/scss/index.scss'


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Header />
            <Routing />
            <Footer />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);