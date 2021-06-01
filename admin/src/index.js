import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Routing from "./components/Routing/Routing.jsx"
import "./index.css"

ReactDOM.render(
<BrowserRouter>
    <Header />
    <Routing />
</BrowserRouter>
, document.getElementById("root"))