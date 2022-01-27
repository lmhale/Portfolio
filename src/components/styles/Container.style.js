import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  grid-template-rows: 1fr 2fr;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: linear-gradient(
      rgba(238, 174, 202, 0.8),
      rgba(148, 187, 233, 0.8)
    ),
    url(${require(`./dreamcity copy.jpg`)}); /* Chrome 10-25, Safari 5.1-6 */
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-size: cover;
  /* background:linear-gradient(75deg, #94bbe8 30%, #eeaeca 70%) ; */
  /* opacity: .70; */
`;
