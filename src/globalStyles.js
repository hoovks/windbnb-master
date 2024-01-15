import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.palette.background};
    font-family: 'Montserrat';
  }

  input {
    border: none;
  }

`;
