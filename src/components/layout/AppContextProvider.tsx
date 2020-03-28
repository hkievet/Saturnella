import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, ThemeKey, AppContext } from '../context';

export interface IAppContextProviderProps {}

export const AppContextProvider: React.FC<IAppContextProviderProps> = props => {
  const [context, setContext] = React.useState<ThemeKey>("light")
  const updateContext = () =>{
    setContext(context === "light" ? "dark" :"light" )
  }


return <AppContext.Provider value={{currentTheme: "dark", updateContext}}>
      <ThemeProvider theme={themes[context]}>
        {props.children}
      </ThemeProvider>
    </AppContext.Provider>
};

export default AppContextProvider;