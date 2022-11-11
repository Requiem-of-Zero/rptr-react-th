import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'Rock Salt', cursive;
  }

  label, input, button, span {
    font-family: 'VT323', monospace;
    font-size: 18px;
  }

`;

export default GlobalStyle;
