import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const GoTop = styled.button`
  color: ${myTheme.colors.accentB};
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 40px;

  @media ${myTheme.media.mobile} {
    right: 52px;
    bottom: 10px;
  }
`;

export const Styles = {GoTop};
