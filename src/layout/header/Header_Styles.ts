import styled from "styled-components";
import { Container } from "../../components/Container";
import { myFont } from "../../styles/Common";
import { myTheme } from "../../styles/Theme.styled";


const Header = styled.header`
  min-height: 70px;
  display: flex;

  position: fixed;
  z-index: 99;

  top: 0;
  left: 0%;
  right: 0;

  ${Container} {
    outline: 1px solid ${myTheme.colors.accentB};
    backdrop-filter: brightness(40%);
    padding: 0 14px;
  }
`;

const LogoStyled = styled.div`
  ${myFont({
    family: '"Alex Brush", "cursive"',
    weight: 400,
    lineHeight: 1.5,
    Fmax: 32,
    Fmin: 14,
  })}
`;

export const Styles = {
  Header,
  LogoStyled
}
