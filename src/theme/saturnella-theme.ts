import { DefaultTheme } from 'styled-components';
import logoDark from '../assets/saturnella_logo_export/160h/logo--dark.png';
import colors from './colors';

// DARK THEME
export const saturnellaTheme: DefaultTheme = {
  logoImage: logoDark,
  colors: {
    primaryText: colors.yellowLight,
    primaryTextBold: colors.yellowBold,
    cardBackground: colors.purpleMedium,
    internalLinkColor: colors.pink,
    backgroundColor: colors.purpleDark,
  },
};

export default saturnellaTheme;
