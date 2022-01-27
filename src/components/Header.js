import { HeaderContainer, HeaderLogo, HeaderLogoDiv,HeaderTextOne, HeaderTextTwo } from "./styles/Header.style";
import Logo from "../../src/Components/styles/Logo.png"
const Header = () => {
  
  function GoToHome(){
    console.log("hommmee")
  }

  return (
  <HeaderContainer>
  <HeaderLogoDiv>
  <HeaderLogo onClick={GoToHome} src={Logo} />
  </HeaderLogoDiv>
 
  </HeaderContainer>
  );
};
export default Header;
