import React from "react";
import Logo from "../assets/computer_icon.png";
import contact_icon from "../assets/contact_icon.png"
import { Link } from "react-router-dom";
import styled from "styled-components";
 
 const HeaderBar = styled.header`
 justify-content: space-between;
 align-items: center;
 width: 100%;
 padding: 0.5em 1em;
 display: flex;
 height: 84px;
 position: fixed;
 padding-left: 30px;
  padding-right: 10px;
 background-color: black;
 box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
 z-index: 1;

`;

const MyName = styled.h1`
  font-family: "Sacramento", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #bc13fe,
    0 0 82px #bc13fe,
    0 0 92px #bc13fe,
    0 0 102px #bc13fe,
    0 0 151px #bc13fe;

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

export const LeftBox = styled.div`
 display: flex;

`;
export const NavList = styled.ul`
    font-family: 'Raleway';
    display: flex;
    padding-right: 50px;
    /* margin: 0;
    padding: 0; */
    list-style: none;
 
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: white;
        padding: 10px 15px;
    }
    a:visited {
        color: white;
    }
    a:hover,
    a:focus {
        color: #E1AD01;
    }
`;

const Header = () => {
  return (
  
    <div>
   
    </div>
   
  );
};
export default Header;
