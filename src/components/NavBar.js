import React from 'react';
import { NavLink, Link } from "react-router-dom"; 
import{ BsFillPersonBadgeFill} from "react-icons/bs";
import contact_icon from "../assets/contact_icon.png"

import styled from 'styled-components';
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 5px;
    background-color: black;
    border-radius: 2px;
    flex:1;
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    font-size: 38px;
    border-radius: 2px;
    flex:1;
    margin:5px;
    border: 0.1px solid #fff;
    box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #bc13fe,
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 1.3rem #bc13fe; 
`;
const MyName = styled.h1`
font-family: "Sacramento", sans-serif;
    color: white;
  font-size: 35px;
  font-weight: 400;
  cursor: pointer;
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
export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    flex:3;
    align-items: center;
    margin:5px;
    justify-content: space-around;
    
   background: black;
    list-style: none;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        color: white;
    }
    a:visited {
        color: white;
    }
    a:hover,
    a:focus {
        text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #bc13fe,
    0 0 82px #bc13fe,
    0 0 92px #bc13fe,
    0 0 102px #bc13fe,
    0 0 151px #bc13fe;
    }
`;

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           
            <Nav>
            <LogoContainer><MyName>L.M.H</MyName>
            </LogoContainer>
            <NavList>
                <li>
               <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
               </li>
            </NavList>
        </Nav>
          );
    }
 
};

export default NavBar;
