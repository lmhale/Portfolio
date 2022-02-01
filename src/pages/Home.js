import React from "react";
import styled from "styled-components";

const NameContainer = styled.div`
 
    font-family: "Sacramento", sans-serif;
 
    background-color: black;

    color:white;
    border: 0.2rem solid #fff;
  border-radius: 2rem;
  padding: 0.5em;
  box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #bc13fe,
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 1.3rem #bc13fe; 
    text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #bc13fe,
    0 0 82px #bc13fe,
    0 0 92px #bc13fe,
    0 0 102px #bc13fe,
    0 0 151px #bc13fe;

`;


const MyName = styled.h1`
    
  font-size: 45px;
  font-weight: 400;


  
    :hover{
      animation: pulsate 1.2s infinite alternate; 
      @keyframes pulsate {
    
    100% {
  
        text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #bc13fe,
        0 0 80px #bc13fe,
        0 0 90px #bc13fe,
        0 0 100px #bc13fe,
        0 0 150px #bc13fe;
    
    }
    
    0% {
  
      text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px #bc13fe,
      0 0 45px #bc13fe,
      0 0 55px #bc13fe,
      0 0 70px #bc13fe,
      0 0 80px #bc13fe;
  
  }
    }
  }
`;



const Home = () => {
    return (
        // <NameContainer>
        //     <MyName>Lauren M. Hale </MyName>
            
          
        //     </NameContainer>
        <div>
        Home
        </div>
    )
}
export default Home;