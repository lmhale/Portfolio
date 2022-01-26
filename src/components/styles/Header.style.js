import styled from "styled-components";

 export const HeaderContainer = styled.header`
    display: grid;   
    grid-column-start: 1;
    grid-column-end: 1; 
    width: 100vw;
   
`;
export const HeaderTextBox = styled.div`
  position: relative;
  margin-left: 2px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 0;
  height: 0;
  border-left: 120px solid transparent;
  border-right: 120px solid transparent;
  border-top: 195px solid rgb(0,201,201,.85);
  text-align: center;

`;
export const HeaderTextOne = styled.div`

    font-family: 'Bungee Shade', cursive;
    font-size: 22px;
    color: pink;
    left:50%;
     top:50%;
   -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
   transform: translate(-50%, -190%);
   position:absolute;
`;
// export const HeaderTextTwo = styled.text`
//     font-family: 'Bungee Shade', cursive;
//     font-size: 40px;
//     color: white;
//     margin-left: 25%;
//     margin-top: 0px;
//     padding: 0px;
//     text-align: left; 

// `;