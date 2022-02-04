import React from 'react';
import NavBar from './NavBar';

import styled from 'styled-components';
// component styles


const Wrapper = styled.div `
 height: 100vh;

 
`;
const Main = styled.main`
  padding: 6px;
  display: flex;
  flex-direction: row;
  height:100%;
  background: url(${require(`../assets/dreamcity.jpg`)});
  background-size: cover; 
  /* justify-content: flex-start; */
  z-index: -1;
  overflow: auto;
scroll-behavior: smooth;
       
    `;

const ContentContainer = styled.div `
  display: flex;
   flex: 6;
   margin-left: 10px;
   justify-content: space-evenly;
  margin-top: 2.5%;
  align-items: flex-start;
  @media (max-width: 500px) {
    flex-direction: column;
  }
    

`;



const Layout = ({ children }) => {
    return (
    <React.Fragment>
            <Wrapper>
            <Main>
            <NavBar/>
            <ContentContainer>
               {children}
            </ContentContainer>
            </Main>
            
        
      
    </Wrapper>
    </React.Fragment>
    );
};
export default Layout;