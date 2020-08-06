import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MySkills extends Component {
  render() {
    return (
      <Container
        fluid
        className="home-my-skills-container background-light"
        id="myskills"
      >
        <Row>
          <Col className="home-my-skills-header-container">
            <h1 className="home-section-title secondary">My Skills</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row>
          <Col md={true} className="home-my-skills-content-one">
            <ul className="home-my-skills-skill-list">
              <li className="home-my-skills-skill-item secondary">
                React JS / React Native / Redux
              </li>
              <li className="home-my-skills-skill-item secondary">
                HTML / CSS / JavaScript / JSON
              </li>
              <li className="home-my-skills-skill-item secondary">
                Ruby / Ruby on Rails
              </li>
              <li className="home-my-skills-skill-item secondary">
                SQL / PostgreSQL / SQLite
              </li>
              <li className="home-my-skills-skill-item secondary">
                Git / Adobe Photoshop / UI Design
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MySkills;
