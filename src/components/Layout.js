import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

import styled from 'styled-components';
// component styles


const Wrapper = styled.div `
 height: 100vh;

 
`;
const Main = styled.main`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
  height:100%;
  background: url(${require(`../assets/dreamcity.jpg`)});
  background-size: cover; 
  justify-content: flex-start;
  z-index: -1;
 
  justify-content: space-between;
  
       
    `;

const ContentContainer = styled.div `
   border: 2px solid green;
   background-color: green;
   flex-basis: calc(100% - 280px)
`;



const Layout = ({ children }) => {
    return (
    <React.Fragment>
            <Wrapper>
            <Main>
            <NavBar/>
            <ContentContainer>
            content
                {children}
            </ContentContainer>
            </Main>
            
        
      
    </Wrapper>
    </React.Fragment>
    );
};
export default Layout;