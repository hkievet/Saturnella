import { DefaultTheme } from 'styled-components';
import logo from '../assets/logo_purple.png';
import colors from './colors';

// DARK THEME
export const saturnellaTheme: DefaultTheme = {
  logoImage: logo,
  colors: {
    primaryText: colors.yellowLight,
    primaryTextBold: colors.yellowBold,
    cardBackground: colors.purpleMedium,
    internalLinkColor: colors.pink,
    backgroundColor: colors.purpleDark,
  },
};

export default saturnellaTheme;
