import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import CustomMenuNavbar from "../components/CustomMenuNavbar";
import CustomFooter from "../components/CustomFooter";

class HomePageContainer extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        {this.state.width > 768 ? <CustomNavbar /> : <CustomMenuNavbar />}
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
              <Button
                className="home-intro-btn background-primary"
                onClick={() => this.props.history.push("portfolio")}
              >
                My Portfolio
              </Button>
              <Button
                className="home-intro-btn-outline background-light"
                onClick={() => this.props.history.push("contact")}
              >
                Let's Get in Touch!
              </Button>
            </div>
          </Row>
        </Container>
        <Container fluid className="home-about-me-container">
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
                With 1+ years of sales experience and a strong desire to face
                new challenges while creating innovative web and mobile
                applications with new technologies. My eye for beautiful design
                allows me to develop great software for clients and users.
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="home-my-skills-container background-light">
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
        <CustomFooter />
      </Fragment>
    );
  }
}

export default HomePageContainer;
