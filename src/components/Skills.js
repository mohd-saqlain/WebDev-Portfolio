import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../Assests/images/meter1.svg";
import meter2 from "../Assests/images/meter2.svg";
import meter3 from "../Assests/images/meter3.svg";
import ColorSharp from "../Assests/images/color-sharp.png";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoRedux,
} from "react-icons/bi";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const skillData = [
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
];
const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                With these skills, I am able to build dynamic and interactive
                websites that provide a seamless user experience. I am
                constantly learning and staying up to date with the latest
                frontend technologies and trends to provide the best possible
                solutions for my clients.
              </p>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>HTML5/CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>React.js</h5>
                </div>
              </Carousel> */}

              <Row className="justify-content-around">
                {skillData.map((skill, ind) => (
                  <Col md={4} xs={6} key={ind}>
                    <div className="m-4 bg-primary py-4 rounded">
                      {React.createElement(skill,{style:{fontSize: "5rem"}})}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={ColorSharp}
        alt="ColorSharpImg"
        className="background-image-left"
      />
    </section>
  );
};

export default Skills;
