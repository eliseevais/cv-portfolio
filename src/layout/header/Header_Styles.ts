import styled from "styled-components";
import { Container } from "../../components/Container_Styles";
import { myFont } from "../../styles/Common";

const Header = styled.header`
  min-height: 72px; 
  display: flex;

  position: fixed;
  z-index: 99;

  top: 0;
  left: 0;     
  right: 0;

  ${Container} {
    padding: 0 16px; 
  }
`;

const HeaderBackground = styled.div`
  width: 100%;
  min-height: 72px; 
  backdrop-filter: brightness(40%);

  position: fixed;
  left: 0;       
  z-index: -1;
`;

const LogoStyled = styled.div`
  ${myFont({
    family: '"Alex Brush", "cursive"',
    weight: 400,
    lineHeight: 0.8,
    Fmax: 32,  
    Fmin: 16, 
  })}

  cursor: pointer;
`;

export const Styles = {
  Header,
  HeaderBackground,
  LogoStyled,
};
