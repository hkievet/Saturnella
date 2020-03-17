import * as React from "react";
import { myTheme } from "../../theme/my-theme";
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider
} from "styled-components";

import { blackTheme } from "../../theme/black-theme";
import GlobalStyles from "../layout/GlobalStyles";
export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;

export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Button = styled.button``;

export const cssHelper = css`
  border: 1px solid ${props => props.theme.borderRadius};
`;

export interface IStandardCenteredDivProps {}

export const StandardCenteredDiv: React.FC<IStandardCenteredDivProps> = props => {
  return (
    <ThemeProvider theme={blackTheme}>
      <GlobalStyles />
      <div>
        <MyComponent>Test</MyComponent>
      </div>
    </ThemeProvider>
  );
};

export default StandardCenteredDiv;
