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
  font-family: "Poppins";
  font-weight: 400;
  font-size: 26px;
  line-height: 38px;
  letter-spacing: 5%;
  margin-top: 34px;
  cursor: pointer;
`;
