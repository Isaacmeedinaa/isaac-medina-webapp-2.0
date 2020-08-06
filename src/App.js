import React, { Component } from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Colors.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFoundComponent from "./components/NotFoundComponent";
import HomePageContainer from "./containers/HomePageContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/404" component={NotFoundComponent} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
