import styled from "styled-components";
import { Container } from "../../components/Container_Styles";
import { myFont } from "../../styles/Common";

const Header = styled.header`
  min-height: 70px; 
  display: flex;
  backdrop-filter: brightness(30%);

  position: fixed;
  z-index: 99;

  top: 0;
  left: 0%;
  right: 0;

  ${Container} {
    
    padding: 0 14px;
  }
`;

const LogoStyled = styled.div`
  ${myFont({
    family: '"Alex Brush", "cursive"',
    weight: 400,
    lineHeight: 0.8,
    Fmax: 32,
    Fmin: 14,
  })}

  cursor: pointer;
`;

export const Styles = {
  Header,
  LogoStyled,
};
