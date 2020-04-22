import * as React from 'react';
import { saturnellaTheme } from '../theme/saturnella-theme';

export type ThemeKey = 'saturnella';

type ContextProps = {
  currentTheme: ThemeKey;
  updateContext: () => void;
};
export const themes = {
  saturnella: saturnellaTheme,
};
export const AppContext = React.createContext<Partial<ContextProps>>({});
