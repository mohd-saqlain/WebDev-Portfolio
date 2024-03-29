import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={4} className="text-center text-sm-start" >
            <span id="logo">
              M-<span>Saqlain</span>
            </span>
          </Col>
          <Col size={12} md={4} className="text-center">
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
          <Col size={12} md={4} className="text-md-end text-center">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/mohd-saqlain-webdev">
                <i class="bi bi-linkedin" id="f-icons"></i>
              </a>
              <a target="_blank" href="https://www.github.com/mohd-saqlain">
                {" "}
                <i class="bi bi-github" id="f-icons"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/in/saqlain.aly">
                <i class="bi bi-instagram" id="f-icons"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
