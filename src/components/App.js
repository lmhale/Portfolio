import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Contact from "./Contact"
import { Home } from "./Home";
import  About  from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContainer } from "./styles/Container.style";

// import styles from "../styles/index.css"
const App = () => {
    return (
        <Router>
        <AppContainer>
        <NavBar/>
        <Header/>
        
        </AppContainer>
       
        <Routes>
   
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
    </Router>
      
       
       
     
    )
}

export default App;