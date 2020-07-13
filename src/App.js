import React, { Component, Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFoundComponent from "./components/NotFoundComponent";
import HomeComponent from "./components/HomeComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import BlogComponent from "./components/BlogComponent";
import ContactComponent from "./components/ContactComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/contact" component={ContactComponent} />'
          <Route exact path="/blog" component={BlogComponent} />
          <Route exact path="/portfolio" component={PortfolioComponent} />
          <Route exact path="/" component={HomeComponent} />
          <Route path="/404" component={NotFoundComponent} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
