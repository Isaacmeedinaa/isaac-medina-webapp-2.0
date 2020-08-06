import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    return (
      <Container fluid className="portfolio-container" id="portfolio">
        <Row>
          <Col className="portfolio-header-container">
            <h1 className="portfolio-title secondary">Portfolio</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row>
          <Col md={true} className="portfolio-content-one"></Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
