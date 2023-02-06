import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import meter3 from "../Assests/images/meter3.svg";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../Assests/images/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: meter3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: meter3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: meter3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: meter3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: meter3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: meter3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Each of these projects showcases my ability to turn complex
              problems into simple and elegant solutions, utilizing my frontend
              development skills to deliver responsive and user-friendly
              websites
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled>
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row id="first-tab">
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        className="background-image-right"
        alt="bg-dark-img"
      />
    </section>
  );
};

export default Projects;
