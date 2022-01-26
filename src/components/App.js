import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Content from "./Content";
import { AppContainer } from "./styles/Container.style";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import styles from "../styles/index.css"
const App = () => {
    return (
        <AppContainer>
        <Header/>
        <NavBar/>
         {/*<Content  />  */}
         </AppContainer>
    )
}

export default App;