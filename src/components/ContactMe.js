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
            <h1 className="contact-me-title secondary">Contact Me</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row>
          <Col md={true} className="contact-me-content-one">
            <form
              className="contact-me-form"
              action="https://formspree.io/xbjzwvrr"
              method="POST"
            >
              <input
                className="contact-me-input"
                placeholder="Full Name"
                name="fullname"
              />
              <input
                className="contact-me-input"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="contact-me-textarea"
                placeholder="Message"
                name="message"
              />
              <input
                className="contact-me-btn background-primary"
                value="Send"
                type="submit"
              />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactMe;
