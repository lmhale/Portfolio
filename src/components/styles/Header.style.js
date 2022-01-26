import styled from "styled-components";

 export const HeaderContainer = styled.header`
    display: grid;   
    grid-column-start: 1;
    grid-column-end: 1; 
    width: 100vw;
`;

export const HeroImage = styled.image `
  overflow: hidden;
    background-position: center bottom;
     /* background-image: url(${require(`./dreamcity.jpg`)});  */
   
    background: linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url(${require(`./dreamcity copy.jpg`)}); /* Chrome 10-25, Safari 5.1-6 */
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-size: cover;
`;