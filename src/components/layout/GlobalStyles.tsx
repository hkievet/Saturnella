import { createGlobalStyle } from 'styled-components';

export interface IGlobalStylesProps {}

// font-family: 'Open Sans', sans-serif;
const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.backgroundColor.hex()};
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    font-family: casablanca-urw, sans-serif;
    font-style: normal;
    font-weight: 300;
  }
  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
export default GlobalStyles;
