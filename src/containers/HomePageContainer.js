import React, { Component, Fragment } from "react";
import { Container, Row, Button } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";

class HomePageContainer extends Component {
  render() {
    return (
      <Fragment>
        <CustomNavbar />
        <Container fluid className="home-intro-container">
          <Row className="home-intro-text-container">
            <div className="home-intro-text-wrapper">
              <p className="home-intro-small primary">Hello 👋, my name is</p>
              <h1 className="home-intro-name secondary">Isaac Medina</h1>
              <div className="block background-primary"></div>
              <p className="home-intro-headline secondary">
                I am a software engineer, <br />
                an entreprenuer and a <br />
                tech enthusiast 👨🏻‍💻.
              </p>
              <Button className="home-intro-btn background-primary">
                My Portfolio
              </Button>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomePageContainer;
