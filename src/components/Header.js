import { HeaderContainer, HeaderLogo, HeaderLogoDiv,HeaderTextOne, HeaderTextTwo } from "./styles/Header.style";
import Logo from "../../src/Components/styles/Logo.png"
const Header = () => {
  
  return (
  <HeaderContainer>
  <HeaderLogoDiv>
  <HeaderLogo  src={Logo} />
  </HeaderLogoDiv>
 
  </HeaderContainer>
  );
};
export default Header;
