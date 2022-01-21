import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import styles from "../styles/index.css"
const App = () => {
    return (
        <div className="app-component">
        <Header className="header-component"/>
        <SideBar className="sidebar-component"/>
         <Content className="content-component" /> 
        </div>
    )
}

export default App;