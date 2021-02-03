import React from "react";
import Main from "../main/Main.jsx";
import Details from "../details/Details.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Main {...routerProps} />}
              />
              <Route
                path="/details/:name"
                exact
                render={(routerProps) => <Details {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
