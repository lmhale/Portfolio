import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
    z-index: 3;
    display: grid;
    background-color: black;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end:2; 
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2px;
    justify-content: center;
    max-width: 15%;
    margin-left:2px;
    font-family: 'arial';
    color:white;
    border-radius: 3px;
    :hover{
               box-shadow:0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    }
`;

export const NavItem = styled.div`
    display: grid;
    /* grid-template-columns: 2fr 2fr; */
    grid-template-columns: 1fr;
    margin: 0px;
    padding: 0px;
    grid-gap: 2px;
    justify-self: stretch;
    align-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    text-align: center;
    font-weight: bold;
    color: white;
    text-decoration: none;
    :hover{
   color: palevioletred;
   
    }
  
`;