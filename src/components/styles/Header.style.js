import styled from "styled-components";

 export const HeaderContainer = styled.header`
    /* display: grid;   
    grid-template-columns: 1fr 2fr;
    /* grid-column-start: 1;
    grid-column-end: 2;  */
    /* width: 100vw;
    z-index: 1; */

`;


export const HeaderLogo = styled.img`
   
    width: 38%;
    margin-left: 10px;
    border-radius: 4px;
     border: 3px outset white; 
     background-color: pink;
     /* box-shadow: 1 4px 4px rgba(0,0,0,0.08); */
     padding: 2px;;
     :hover{
      cursor: pointer;
      box-shadow:0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 8px 16px rgba(0,0,0,0.07);
             
      border: 3px inset rgba(0,0,0,0,.9);
      background-color: rgb(64,224,208, .8);
      transition: 0.4s;
     }
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