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
    font-family: "Poppins";
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
  }

  button {
    background-color: unset;
    border: unset;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
    
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 68px;
    line-height: 1.5;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 26px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 3px;
  }

  h6 {
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 12px;
    text-transform: none;
  }

  input, textarea {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 1.5px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 1.5px;
  } 

  section {
    background-color: ${myTheme.colors.backgroundA};
  }

  small {
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-transform: none;
  }

  span {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.5;
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
  }  
`;
