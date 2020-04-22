import 'styled-components';
import * as Color from 'color';

declare module 'styled-components' {
  export interface DefaultTheme {
    logoImage: string;
    // French names for our colors becaus this is DESIG
    colors: {
      primaryText: Color;
      primaryTextBold: Color;
      cardBackground: Color;
      internalLinkColor: Color;
      backgroundColor: Color;
    };
  }
}
