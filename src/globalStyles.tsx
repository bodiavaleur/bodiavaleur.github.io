import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  } 

  body, #root {
   min-height: 100vh;
  }

  #root  {
    display: grid;
    grid-template-rows: 100vh auto;
    grid-gap: 10rem;
    background: #1A1A1A;
  }


  @media (min-width: ${theme.breakpoints.lg}) {
    html {
      font-size: 18px;
    }
  }

  @media (min-width: ${theme.breakpoints.desktophd}) {
    html {
      font-size: 28px;
    }
  }
`;
