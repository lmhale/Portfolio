import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

import styled from 'styled-components';
// component styles
const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        top: 84px;
        position: relative;
        height: calc(100% - 84px);
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;
const Main = styled.main`
    position: fixed;
    background: url(${require(`../assets/dreamcity.jpg`)});
    filter: brightness(.8);
    background-size: cover;
    opacity: .9;
    height: calc(100% - 84px);
    width: 100%;
    padding: 1em;
    overflow-y: scroll;
    @media (min-width: 700px) {
        flex: 1;
        height: calc(100% - 64px);
       
    }
`;




const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <Wrapper >
           
            <Main>{children}</Main>
        </Wrapper>
    </React.Fragment>
    );
};
export default Layout;