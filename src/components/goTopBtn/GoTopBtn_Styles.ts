import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const GoTop = styled.button`
  color: ${myTheme.colors.accentA};
  cursor: pointer;
  position: fixed;
  right: 30px;
  bottom: 20px;
  transition: ${myTheme.animations.transition};

  &:hover {
    transform: scale(1.01);
    color: ${myTheme.colors.accentB};
  }

  @media ${myTheme.media.tablet} {
    bottom: 10px;
  }
`;

export const Styles = {GoTop};
