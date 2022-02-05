import React from 'react';
import { NavLink, Link } from "react-router-dom"; 
import{ BsFillPersonBadgeFill} from "react-icons/bs";
import contact_icon from "../assets/contact_icon.png"

import styled from 'styled-components';
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 5px;
    background:rgba(10,64,116,.95); 
   
    border-radius: 2px;
    flex:1;
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: black; */
    font-size: 38px;
    border-radius: 2px;
    flex:1;
    margin:5px;
    border: 0.1px solid #fff;
    box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #ff1aff,
            0 0 0.8rem #ff1aff,
            0 0 2.8rem #ff1aff,
            inset 0 0 1.3rem #ff1aff; 
`;
const MyName = styled.h1`
font-family: "Sacramento", sans-serif;
    color: whitesmoke;
  font-size: 35px;
  font-weight: 400;
  cursor: pointer;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #ff1aff,
    0 0 82px #ff1aff,
    0 0 92px #ff1aff,
    0 0 102px #ff1aff,
    0 0 151px #ff1aff;

    :hover{
      animation: pulsate 1.2s infinite alternate; 
      @keyframes pulsate {
    
    100% {
        text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #ff1aff,
        0 0 80px #ff1aff,
        0 0 90px #ff1aff,
        0 0 100px #ff1aff,
        0 0 150px #ff1aff;
    }
    
    0% {
  
      text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px #ff1aff,
      0 0 45px #ff1aff,
      0 0 55px #ff1aff,
      0 0 70px #ff1aff,
      0 0 80px #ff1aff;
  
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
    
   /* background: black; */
    list-style: none;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        color: whitesmoke;
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
    0 0 42px #ff1aff,
    0 0 82px #ff1aff,
    0 0 92px #ff1aff,
    0 0 102px #ff1aff,
    0 0 151px #ff1aff;
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
