import React from 'react';
import { NavbarContainer, NavItem, StyledLink } from "./styles/NavBar.style";
import { NavLink, Link } from "react-router-dom"; 
import{ BsFillPersonBadgeFill} from "react-icons/bs";
import contact_icon from "../assets/contact_icon.png"

import styled from 'styled-components';
const Nav = styled.nav`
display: flex;

    padding: 1em;
    background: black;
    flex-basis: 250px;
   
`;
export const NavList = styled.ul`
    margin: 0;
    padding-bottom: 2px;
    list-style: none;
    line-height: 2;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
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
