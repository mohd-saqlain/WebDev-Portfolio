import { useState, useEffect, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../Assests/images/header-img.svg";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FrontEnd Web Dev", "React.js Developer", "Developer"];
  const [text, setText] = useState("");
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to My Portfolio</span>
            <h1>Hi I'm <span id="name">Mohd Saqlain</span></h1>
            <h1>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I am a frontend web developer with a passion for creating visually
              appealing and user-friendly websites. With knowledge of HTML5,
              CSS3, JavaScript, React.js, Redux, Bootstrap and tailwind Css. I am equipped to
              handle all aspects of the frontend development process. My goal is
              to deliver clean, efficient, and responsive websites that meet the
              needs of both users and businesses.
               {/* Through my projects, I aim to
              demonstrate my ability to turn complex problems into simple and
              elegant solutions. Let's work together to bring your vision to
              life!" */}
            </p>
            <button onClick={() => console.log("Connect")}>
              <a href="#connect">
                {" "}
                <span id="lc">Let's Connect</span> <ArrowRightCircle />{" "}
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
