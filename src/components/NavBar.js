import React from 'react';
import { NavbarContainer, NavItem, StyledLink } from "./styles/NavBar.style";
import { NavLink, Link } from "react-router-dom"; 
import{ BsFillPersonBadgeFill} from "react-icons/bs";
import styled from 'styled-components';
const Nav = styled.nav`
    padding: 1em;
    background: #f7f3e9;
    @media (max-width: 700px) {
        padding-top: 64px;
    }
    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
    }
`;
const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: #333;
    }
    a:visited {
        color: #333;
    }
    a:hover,
    a:focus {
        color: #0077cc;
    }
`;

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            // <NavbarContainer>
            // <NavItem>
            // <BsFillPersonBadgeFill size={30}/>
            // <StyledLink to="/about" 
            //   >About</StyledLink>
            //   </NavItem>
            //   <NavItem>
            //   <BsFillPersonBadgeFill size={30}/>
            // <StyledLink to="/projects">Projects</StyledLink>
            // </NavItem>
            // <NavItem>
            // <BsFillPersonBadgeFill size={30}/>
            // <StyledLink to="/contact">Contact</StyledLink>
            // </NavItem>
            // </NavbarContainer>
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
