import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

import styled from 'styled-components';
// component styles


const Wrapper = styled.div `
 height: 100vh;

 
`;
const Main = styled.main`
  padding: 5px;
  display: flex;
  flex-direction: row;
  height:100%;
  background: url(${require(`../assets/dreamcity.jpg`)});
  background-size: cover; 
  justify-content: flex-start;
  z-index: -1;
 
  justify-content: space-between;
  
       
    `;

const ContentContainer = styled.div `
    display: flex;
   flex: 5;
   margin-left: 10px;
   justify-content: space-evenly;
   align-items: flex-start;
   align-content: center;
   padding-top: 5px;
    

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