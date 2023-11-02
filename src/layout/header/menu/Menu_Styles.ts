import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";

const ListItem = styled.li``;

const Link = styled.a`
  color: ${myTheme.colors.accentB};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;

  &:active {
    color: ${myTheme.colors.accentA};
  }

  &:hover {
    color: ${myTheme.colors.accentA};
  }
`;

export const Styles = {
  ListItem,
  Link
}
