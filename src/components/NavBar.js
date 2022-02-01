import React from 'react';
import { NavbarContainer, NavItem, StyledLink } from "./styles/NavBar.style";
import { NavLink, Link } from "react-router-dom"; 
import{ BsFillPersonBadgeFill} from "react-icons/bs";
import contact_icon from "../assets/contact_icon.png"

import styled from 'styled-components';
const Nav = styled.nav`
display: flex;
flex-direction: column;
    padding: 5px;
    background-color: black;
    flex-basis: 250px;
   
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 40px;
    flex-basis: 180px;
     /* margin:10px 0 10px 0;  */
    margin:5px
    
`;
export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:5px;
    justify-content: space-around;
    flex-basis: calc(100% - 210px);
   background: black;
    list-style: none;
    border: 3px solid purple;
    /* line-height: 2; */
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
        color:rgba(238, 174, 202, 0.9) ;
    }
`;

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           
            <Nav>
            <LogoContainer>L.M.H</LogoContainer>
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
