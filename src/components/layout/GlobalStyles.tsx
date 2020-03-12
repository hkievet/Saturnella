import * as React from "react";
import { createGlobalStyle } from "styled-components";

export interface IGlobalStylesProps {}

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #04080C;
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
  }
  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
export default GlobalStyles;
