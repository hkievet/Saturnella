import * as React from 'react';
import styled from 'styled-components';
import { AppContext, themes } from './context';

export const LandingPage = () => {
  const { themeKey: currentTheme } = React.useContext(AppContext);
  return (
    <div>
      <img src={themes[currentTheme].logoImage} alt="logo" />
    </div>
  );
};

export default LandingPage;
