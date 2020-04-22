import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';
import AppContextProvider from './components/layout/AppContextProvider';
import GlobalStyles from './components/layout/GlobalStyles';

const LandingPage = React.lazy(() => import('./components/LandingPage'));

export const myClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

export interface IAppProps {}

export const App: React.FC<IAppProps> = (props) => {
  return (
    <ApolloProvider client={myClient}>
      <React.Suspense fallback={<div>loading...</div>}>
        <Router history={createBrowserHistory()}>
          <AppContextProvider>
            <GlobalStyles />
            <Switch>
              <Route path="/" component={LandingPage} />
            </Switch>
          </AppContextProvider>
        </Router>
      </React.Suspense>
    </ApolloProvider>
  );
};

export default App;
