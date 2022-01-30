import React from "react";
import Pages from '../Router'
 import styles from "./styles/index.css";
import styled from "styled-components";
 
const AppDiv = styled.div `
 /* background: url('../assets/dreamcity.jpg') */
 background-color: red;
 `;

const App = () => {
    return (
       <AppDiv>
            <Pages/>
       </AppDiv>
       
     
    )
}

export default App;