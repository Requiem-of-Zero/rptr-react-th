import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'Varela Round';
  }

  label, input, span {
    font-family: 'Varela Round';
    font-size: 13px;
  }

`;

export default GlobalStyle;
