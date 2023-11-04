import styled from "styled-components";
import { Container } from "../../components/Container_Styles";
import { myFont } from "../../styles/Common";

const Header = styled.header`
  min-height: 70px; 
  display: flex;

  position: fixed;
  z-index: 99;

  top: 0;
  left: 0%;
  right: 0;

  ${Container} {
    backdrop-filter: brightness(50%);
    padding: 0 14px;
  }
`;

const LogoStyled = styled.div`
  ${myFont({
    family: '"Alex Brush", "cursive"',
    weight: 400,
    lineHeight: 0.85,
    Fmax: 32,
    Fmin: 14,
  })}
`;

export const Styles = {
  Header,
  LogoStyled,
};
