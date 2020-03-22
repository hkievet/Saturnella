import * as React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
// import Resume from "./components/resume/Resume";
import { createBrowserHistory } from "history";
import StandardCenteredDiv from "./components/views/standardCenteredDiv";
import { ApolloProvider } from "@apollo/react-hooks";

const LandingPage = React.lazy(() => import("./components/LandingPage"));

import ApolloClient from "apollo-boost";
export const myClient = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

export interface IAppProps {}

export const App: React.FC<IAppProps> = props => {
  return (
    <ApolloProvider client={myClient}>
      <React.Suspense fallback={<div>loading...</div>}>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route path="/2" component={StandardCenteredDiv} exact={true} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </React.Suspense>
    </ApolloProvider>
  );
};

export default App;
