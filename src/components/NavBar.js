import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <Navbar expand="md" variant="dark" id="nav-dark" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <span id="logo">
            M-<span>Saqlain</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto myNav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text ">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/mohd-saqlain-webdev">
                <i class="bi bi-linkedin" id="icons"></i>
              </a>
              <a target="_blank" href="https://www.github.com/mohd-saqlain">
                <i class="bi bi-github" id="icons"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/saqlain.aly">
                <i class="bi bi-instagram" id="icons"></i>
              </a>
            </div>
            <a className="vvd" href="#connect">
              Let's Connect
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
