import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class AboutMe extends Component {
  render() {
    return (
      <Container fluid className="home-about-me-container" id="aboutme">
        <Row>
          <Col className="home-about-me-header-container">
            <h1 className="home-section-title secondary">About Me</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row className="home-about-me-content-container">
          <Col md={true} className="home-about-me-content-one">
            <img
              className="home-about-me-img"
              src={require("../assets/about-me-img.jpg")}
            />
          </Col>
          <Col md={true} className="home-about-me-content-two">
            <p className="home-about-me-text secondary">
              A committed and passionate developer that is ready to create
              amazing software with a motivated team. Responsible for meeting
              deadlines, accommodating clients, and providing a great product.
              With 1+ years of sales experience and a strong desire to face new
              challenges while creating innovative web and mobile applications
              with new technologies. My eye for beautiful design allows me to
              develop great software for clients and users.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
