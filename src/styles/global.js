import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --gray-00: #000000;
    --gray-24: #3D3D3D;
    --gray-88: #DFDFDF;
    --sectionbg: #F2F2F2;
    --white: #FFFFFF;
    --primary: #00A870;
    --secondary: #5E20A4;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    color: black;
    -webkit-font-smoothing: antialiased;
  }
  `;