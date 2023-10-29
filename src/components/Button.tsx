import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Button = styled.button`
  width: 280px;
  height: 72px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    ${myTheme.colors.brightA} 20%,
    ${myTheme.colors.brightB}
  );
  color: ${myTheme.colors.accentA};

  letter-spacing: 5%;
  margin-top: 34px;
  cursor: pointer;
  position: relative;
  transition: 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background: ${myTheme.colors.backgroundA};
    border-radius: 10px;
    z-index: -1;
    transition: ease 0.2s;
  }

  &:hover {
    transform: scale(1);
  }
`;
