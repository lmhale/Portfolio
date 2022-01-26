import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: grid;
    background-color: grey;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end:1; 
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 3px;
    justify-content: center;
    max-width: 20%;
`;

export const NavItem = styled.a`
    margin-top: 4px;
    color:white;
`;