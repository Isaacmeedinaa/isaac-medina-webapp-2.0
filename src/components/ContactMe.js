import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class ContactMe extends Component {
  render() {
    return (
      <Container
        fluid
        className="contact-me-container background-light"
        id="contactme"
      >
        <Row>
          <Col className="contact-me-header-container">
            <h1 className="contact-me-title secondary">ContactMe</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row>
          <Col md={true} className="contact-me-content-one"></Col>
        </Row>
      </Container>
    );
  }
}

export default ContactMe;
