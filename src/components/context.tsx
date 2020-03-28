import { darkTheme } from "../theme/dark-theme";
import { lightTheme } from "../theme/light-theme";

import * as React from "react";

export type ThemeKey = "dark" | "light";

type ContextProps = {
  currentTheme: ThemeKey;
  updateContext: () => void;
};
export const themes = {
  dark: darkTheme,
  light: lightTheme
};
export const AppContext = React.createContext<Partial<ContextProps>>({})