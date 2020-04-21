import * as React from 'react';
import { lightTheme } from '../../theme/light-theme';
import styled, { createGlobalStyle, css, ThemeProvider, ThemeContext } from 'styled-components';

import { darkTheme } from '../../theme/dark-theme';
import GlobalStyles from '../layout/GlobalStyles';
export const MyComponent = styled.div`
  color: ${(props) => props.theme.colors.un};
`;

export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.deux};
  }
`;

export const Button = styled.button``;

export const cssHelper = css`
  border: 1px solid ${(props) => props.theme.borderRadius};
`;

export interface IStandardCenteredDivProps {}

export const StandardCenteredDiv: React.FC<IStandardCenteredDivProps> = (props) => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <>
      <GlobalStyles />
      <div>
        <img height="84" src={themeContext.logoImage} />
      </div>
    </>
  );
};

export default StandardCenteredDiv;
