import styled from "styled-components";

export const NavbarContainer = styled.nav`
  
    display: grid;
    background-color: black;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end:1; 
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 3px;
    justify-content: center;
    max-width: 20%;
    margin-left:2px;
`;

export const NavItem = styled.a`
    font-family: 'arial';
    margin-top: 10px;
    color:white;
`;