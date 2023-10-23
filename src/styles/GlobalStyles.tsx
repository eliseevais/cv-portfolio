import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    text-transform: capitalize;
    color: ${myTheme.colors.accentA};
    background-color: ${myTheme.colors.backgroundA};
  }

  a {
      text-decoration: unset;
      color: ${myTheme.colors.accentA};
    }

  ul {
    list-style-type: none;
  }

  button {
    background-color: unset;
    border: unset;
  }

  section {
    background-color: ${myTheme.colors.backgroundA};
    /* border: 1px solid green; */
  }

`;
