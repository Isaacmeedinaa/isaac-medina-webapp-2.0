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
          <Col md={true} className="portfolio-content-one">
            <div className="portfolio-one-wrapper background-light">
              <div className className="portfolio-section-header-container">
                <h4 className="portfolio-section-title secondary">
                  Mobile Applications
                </h4>
                <div className="section-block background-primary"></div>
              </div>
              <div className="portfolio-one-list-item">
                <a
                  href="https://expo.io/@isaacmeedinaa/TrinyxApp"
                  target="_blank"
                  className="portfolio-one-list-item-title secondary"
                >
                  TrinyxApp
                </a>
                {/* <p className="portfolio-one-list-item-description primary">
                  TrinyxApp is a mobile application that allows businesses to
                  upload deals for residents in their communities. Residents are
                  able to use the app to use the deals posted by businesses.
                </p> */}
              </div>
              <div className="portfolio-one-list-item">
                <a
                  href="https://expo.io/@isaacmeedinaa/ShopApp"
                  target="_blank"
                  className="portfolio-one-list-item-title secondary"
                >
                  Shop App
                </a>
                {/* <p className="portfolio-one-list-item-description primary">
                  Mobile application written with React Native, Redux, SQLite to
                  persist data on the device, and uses Google's Location API for
                  location services. This application uses native device
                  features such as location and the camera. Users are able to
                  post a place they have visited by taking a picture and
                  choosing a location on a map.
                </p> */}
              </div>
              <div className="portfolio-one-list-item">
                <a
                  href="https://expo.io/@isaacmeedinaa/MealsApp"
                  target="_blank"
                  className="portfolio-one-list-item-title secondary"
                >
                  Meals App
                </a>
                {/* <p className="portfolio-one-list-item-description primary">
                  Mobile application written with React Native and Redux. This
                  application allows users to browse a list of meals and filter
                  the list of meals by type of food. Users can also favorite a
                  meal and can access their favorited meals in the "Favorites"
                  tab.
                </p> */}
              </div>
              <div className="portfolio-one-list-item">
                <a
                  href="https://expo.io/@isaacmeedinaa/PlacesApp"
                  target="_blank"
                  className="portfolio-one-list-item-title secondary"
                >
                  Places App
                </a>
                {/* <p className="portfolio-one-list-item-description primary">
                  Mobile application written with React Native, Redux, SQLite to
                  persist data on the device, and uses Google's Location API for
                  location services. This application uses native device
                  features such as location and the camera. Users are able to
                  post a place they have visited by taking a picture and
                  choosing a location on a map.
                </p> */}
              </div>
            </div>
            <div className="portfolio-two-wrapper background-light">
              <div className className="portfolio-section-header-container">
                <h4 className="portfolio-section-title secondary">
                  Web Applications
                </h4>
                <div className="section-block background-primary"></div>
              </div>
              <div className="portfolio-two-list-item">
                <a
                  href="http://flatnotes-front-end.herokuapp.com/notes"
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                  Flatnotes
                </a>
                {/* <p className="portfolio-two-list-item-description primary">
                  Description
                </p> */}
              </div>
              <div className="portfolio-two-list-item">
                <a
                  href="http://www.jsoundshop.com/"
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                  J's Sounds Shop
                </a>
                {/* <p className="portfolio-two-list-item-description primary">
                  Description
                </p> */}
              </div>
              <div className="portfolio-two-list-item">
                <a
                  href="http://www.camargolandscaping.com/"
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                  Camargo Landscaping
                </a>
                {/* <p className="portfolio-two-list-item-description primary">
                  Description
                </p> */}
              </div>
              <div className="portfolio-two-list-item">
                <a
                  href="http://www.trinumdesign.com/"
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                  Trinum Design
                </a>
                {/* <p className="portfolio-two-list-item-description primary">
                  Description
                </p> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
