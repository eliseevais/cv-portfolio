import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";
import { myFont } from "./Common";

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

    ${myFont({
      weight: 400,
      lineHeight: 1.5,
      Fmax: 26,
      Fmin: 18,
    })}
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
    ${myFont({
      weight: 600,
      lineHeight: 1.5,
      Fmax: 56,
      Fmin: 46,
    })}
  letter-spacing: 5px;
  }
    
  h3 {
    ${myFont({
      weight: 600,
      lineHeight: 1.5,
      Fmax: 68,
      Fmin: 34,
    })}
  }

  h4 {
    ${myFont({
      weight: 600,
      lineHeight: 1.5,
      Fmax: 26,
      Fmin: 14,
    })}

    letter-spacing: 3px;
  }

  input, textarea {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 1.5px;
  }

  p {
    ${myFont({
      weight: 400,
      lineHeight: 1.5,
      Fmax: 14,
      Fmin: 10,
    })}

    letter-spacing: 1.5px;
  } 

  section {
    background-color: ${myTheme.colors.backgroundA};
  }

  small {
    ${myFont({
      family: '"Fira Code", sans-serif',
      weight: 400,
      lineHeight: 1.5,
      Fmax: 12,
      Fmin: 10,
    })}
    
    text-transform: none;
  }

  span {
    ${myFont({
      weight: 300,
      lineHeight: 1.5,
      Fmax: 20,
      Fmin: 14,
    })}

    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
  }  
`;
