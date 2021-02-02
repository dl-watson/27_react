import React from "react";
// import "./App.css";
import Main from "../main/Main.jsx";
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
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
