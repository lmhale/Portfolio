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
  background:linear-gradient(to top, rgba(255,182,193,.3),rgba(0, 0, 80, 1)), url(${require(`../assets/dreamcity.jpg`)});
  
  background-size: cover; 
 
  z-index: -1;
  overflow-y: auto; 
  scroll-behavior: smooth;

    `;

const ContentContainer = styled.div `
  display: flex;
   flex: 8;
   /* height: 100%; */
   justify-content: center;
   align-items: center;
   border: 2px solid green;
  /* margin-left:10px;
  margin-top: .5%;


  @media (max-width: 500px) {
    flex-direction: column;
  }
  background-color: rgba(0,0,0,.3); */

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