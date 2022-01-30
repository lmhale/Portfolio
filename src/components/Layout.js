import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

import styled from 'styled-components';
// component styles


const Wrapper = styled.div `
box-sizing:border-box;
width: 100%;
background: url(${require(`../assets/dreamcity.jpg`)});
background-size: cover;

`;
const Main = styled.main`
  display: flex;
     flex-flow: column nowrap; 
   justify-content: center;
    height: 100%;
    margin-left: 210px; 
    width:100%;
    top:0;
    left:0;
    /* overflow-y: scroll;  */
    @media (min-width: 700px) {
        /* flex: 1; */
        /* height: calc(100% - 64px); */
       
    }

    /* ::before {
     content: "";
      background-image: url(${require(`../assets/dreamcity.jpg`)}); 
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: -1;
     filter: brightness(.8);
    } */
`;

const ContentContainer = styled.div `
  
    display: flex;
    flex-basis:auto;
    height:100vh;

    margin: 10px;
     width: calc(100% - 220px); 

    background-color: rgba(0,0,0,.3); 
`;



const Layout = ({ children }) => {
    return (
    <React.Fragment>
            <Wrapper>
           <NavBar/>
            <Main>
            <ContentContainer>
                {children}
            </ContentContainer>
            </Main>
    </Wrapper>
    </React.Fragment>
    );
};
export default Layout;