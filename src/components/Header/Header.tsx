// import logo from '../assets/pokemon-logo-vector.png';

import logo from "../../assets/pokemon-logo-vector.png"
import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";
import { Container, Wrapper, Image } from './Header.styles';
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Header = () => {

    return (
      <Wrapper>
        <Container>
          <ColorSwitcher />
          <Image src={logo} alt="Pokemon-logo-image" />
        </Container>
      </Wrapper>
    );
};

export default Header;