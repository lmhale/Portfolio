import React from 'react';
import { NavbarContainer, NavItem, StyledLink } from "./styles/NavBar.style";
import { NavLink, Link } from "react-router-dom"; 
import{ BsFillPersonBadgeFill} from "react-icons/bs";



class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <NavbarContainer>
            <NavItem>
            <BsFillPersonBadgeFill size={30}/>
            <StyledLink to="/about" 
              >About</StyledLink>
              </NavItem>
              <NavItem>
              <BsFillPersonBadgeFill size={30}/>
            <StyledLink to="/projects">Projects</StyledLink>
            </NavItem>
            <NavItem>
            <BsFillPersonBadgeFill size={30}/>
            <StyledLink to="/contact">Contact</StyledLink>
            </NavItem>
            </NavbarContainer>
          );
    }
 
};

export default NavBar;
