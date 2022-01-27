import React from "react";
import Logo from "../assets/Logo.png";
import styled from "styled-components";
 
 const HeaderBar = styled.header`
 width: 100%;
 padding: 0.5em 1em;
 display: flex;
 height: 84px;
 position: fixed;
 align-items: center;
 background-color: #fff;
 box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
 z-index: 1;
`;



const Header = () => {
  return (
    <HeaderBar>
    <img src={Logo} alt="my name Logo" height="80" />
    </HeaderBar>
  );
};
export default Header;
