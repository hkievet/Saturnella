import { createGlobalStyle } from 'styled-components';

export interface IGlobalStylesProps {}

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.backgroundColor.hex()};
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    background-image: linear-gradient( to right, #BEB27F, #BE7FA7, #80B1B5 );
  }
  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
export default GlobalStyles;
